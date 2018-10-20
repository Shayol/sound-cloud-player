<template>
  <div class="history">
    <h1 class="history__header">Recent searches</h1>
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
  @include box-shadow;
  padding: 1.5em 1em;
  &__header {
    font-size: 24px;
    margin-bottom: 1em;
    text-shadow: 0.5px 0.5px rgba(85, 85, 85, 0.5);
  }
  &__list {
    padding-left: 4px;
  }
  &__item {
    cursor: pointer;
    line-height: 1.5;
    margin-bottom: 16px;
    font-size: 12px;
    color: black;
    text-decoration-color: #555;
    font-weight: bold;
    text-shadow: 0.5px 0.5px rgba(85, 85, 85, 0.5);
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
