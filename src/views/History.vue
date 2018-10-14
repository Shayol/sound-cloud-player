<template>
  <div class="history">
    <h1>Recent searches</h1>
    <ul class="history__list">
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <li v-for="item in searchHistory">{{item}}</li>
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
  }
};
</script>