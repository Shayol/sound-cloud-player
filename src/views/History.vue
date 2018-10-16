<template>
  <div class="history">
    <h1>Recent searches</h1>
    <ul class="history__list">
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <li class="history__item" @click="startSearch(item)" v-for="item in searchHistory">{{item}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "History",
  components: {},
  created() {
    this.$store.commit("initializeHistory");
  },
  computed: {
    searchHistory() {
      return this.$store.state.history;
    }
  },
  methods: {
    startSearch(query) {
      this.$store.commit("updateQuery", { value: query });
      this.$store.dispatch("searchTrack");
    }
  }
};
</script>
<style lang="scss">
.history {
  &__item {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
