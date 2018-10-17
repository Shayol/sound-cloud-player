<template>
  <div class="search-result">
    <a class="search-result__link" href="" @click.prevent="chooseTrack">{{searchResult.title}}</a>
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
.search-result {
  &__link {
    line-height: 2;
    font-size: 12px;
    color: black;
    text-decoration-color: #0044cc;
  }
}
</style>
