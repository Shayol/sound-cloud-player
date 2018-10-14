<template>
  <div class="search">
    
    <form action="" @submit.prevent="searchTrack" class="search__form">
      <input type="text" v-model="query" class="search__input">
      <button type="submit" class="search__submit">
        Go
      </button>
    </form>

    <ul class="search__results">
      <SearchResult v-for="item in results" :key="item.id" :search-result="item"/>
    </ul>

    <button v-if="nextHref" @click="nextPage" class="search__next">
      Next
    </button>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SearchResult from "@/components/SearchResult";
export default {
  name: "Search",
  components: {
    SearchResult
  },
  computed: {
    query: {
      get() {
        return this.$store.state.query;
      },
      set(value) {
        this.$store.commit("updateQuery", { value: value });
      }
    },
    results() {
      return this.$store.state.results;
    },
    nextHref() {
      return this.$store.state.next_href;
    }
  },
  methods: {
    searchTrack() {
      this.$store.dispatch("searchTrack");
    },
    nextPage() {
      this.$store.dispatch("nextPage");
    }
  }
};
</script>
<style lang="scss">
</style>

