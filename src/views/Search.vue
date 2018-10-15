<template>
  <div class="search">
    
    <form action="" @submit.prevent="searchTrack" class="search__form">
      <input type="text" v-model="query" class="search__input">
      <button type="submit" class="search__submit">
        Go
      </button>
    </form>

    <ul class="search__results">
      <SearchResult v-for="item in pageResults" :key="item.id" :search-result="item"/>
    </ul>

    <button v-if="!lastPage" @click="nextPage" class="search__next">
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
  data: function() {
    return {
      page: 0
    };
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
    },
    pageResults() {
      return this.$store.getters.pageResults(this.page);
    },
    lastPage() {
      return this.page == this.$store.getters.allPages;
    }
  },
  methods: {
    searchTrack() {
      this.$store.dispatch("searchTrack");
    },
    nextPage() {
      if (
        this.page + 1 == this.$store.getters.fullPages &&
        this.$store.state.next_href
      ) {
        this.$store.dispatch("nextPage").then(() => this.page++);
      } else {
        this.page++;
      }
    }
  }
};
</script>
<style lang="scss">
</style>

