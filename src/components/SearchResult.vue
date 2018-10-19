<template>
  <li class="search-result" :class="{thumbnails__item: thumbnails}">
    <a class="search-result__link" href="" @click.prevent="chooseTrack" :class="{thumbnails__link: thumbnails}">
      <h3 class="search-result__title" :class="{thumbnails__title: thumbnails}" >
        <span class="search-result__index" :class="{invisible: thumbnails}">{{itemIndex}}.</span> {{searchResult.title}}
      </h3>
      <img class="thumbnails__img" v-if="thumbnails" :src="image" alt="result thumbnail">
    </a>
   
  </li>
</template>

<script>
export default {
  name: "SearchResult",
  props: ["searchResult", "index", "page"],
  computed: {
    thumbnails() {
      return this.$store.state.displayThumbnails;
    },
    image() {
      return this.searchResult.artwork_url
        ? this.searchResult.artwork_url
        : this.$store.state.default_img;
    },
    itemIndex() {
      return this.page * this.$store.state.page_size + this.index + 1;
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
    line-height: 1.5;
    margin-bottom: 16px;
    font-size: 12px;
    color: black;
    font-weight: bold;
    text-decoration: underline;
  }
  &__link {
    text-decoration: none;
  }
}
.thumbnails {
  &__item {
    flex-basis: auto;
    min-height: 100px;
    min-width: 100px;
    padding: 3px;
    background-color: white;
    @include box-shadow;
    &:hover {
      transform: scale(1.05);
    }
    display: inline-block;
  }
  &__link {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    font-size: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
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
    background-color: rgba(255, 255, 255, 0.45);
  }
  &__img {
    max-width: 100px;
    width: 100%;
    height: auto;
    max-height: 100px;
  }
}
.invisible {
  display: none;
}
</style>
