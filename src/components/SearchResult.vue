<template>
  <div class="search-result">
    <a href="" @click.prevent="chooseTrack">{{searchResult.title}}</a>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: ["searchResult"],
  methods: {
    chooseTrack: function() {
      this.$store.commit("updatePlayer", this.searchResult);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
