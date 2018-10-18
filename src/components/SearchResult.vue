<template>
  <div class="search-result" :class="{thumbnails__item: thumbnails}">
    <a class="search-result__link" href="" @click.prevent="chooseTrack" :class="{thumbnails__link: thumbnails}">
      <h3 class="search-result__title" :class="{thumbnails__title: thumbnails}" >
        {{searchResult.title}}
      </h3>
      <img class="thumbnails__img" v-if="thumbnails" :src="image" alt="result thumbnail">
    </a>
   
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: ["searchResult"],
  computed: {
    thumbnails() {
      return this.$store.state.displayThumbnails;
    },
    image() {
      return this.searchResult.artwork_url
        ? this.searchResult.artwork_url
        : this.$store.state.default_img;
    }
  },
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
  &__title {
    line-height: 2;
    font-size: 12px;
    color: black;
    text-decoration-color: #0044cc;
  }
}
.thumbnails {
  &__item {
    flex-basis: auto;
    flex-shrink: 0;
    margin-bottom: 10%;
  }
  &__link {
    position: relative;
  }
  &__title {
    font-size: 8px;
    padding-top: 4px;
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
    width: 100%;
    text-decoration: none;
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    color: black;
    background-color: rgba(255, 255, 255, 0.39);
  }
  &__img {
    max-width: 100px;
    max-height: 100px;
  }
}
</style>
