<template>
  <div class="search">
    
    <form action="" @submit.prevent="searchTrack" class="search__form">
      <input placeholder="Search..." type="text" v-model="query" class="search__input">
      <button type="submit" class="search__submit">
        Go
      </button>
    </form>

    <ul class="search__results">
      <SearchResult v-for="item in pageResults" :key="item.id" :search-result="item"/>
    </ul>
    
    <div class="search__bottom-buttons">
        <svg v-if="!lastPage" @click="nextPage" class="search__next" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 297.5 297.5" style="enable-background:new 0 0 297.5 297.5;" xml:space="preserve">
    <polygon points="297.5,148.25 148,33.25 148,100.25 0,100.25 0,199.25 148,199.25 148,264.25 "/>
    </svg>
    </div>

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
.search {
  display: flex;
  flex-direction: column;
  &__input {
    height: 40px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: none;
    outline: none;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 16px;
    padding: 8px 8px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    transition: all 0.3s ease-out;

    &:focus {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
    }
    &:placeholder {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 16px;
    }
  }
  &__bottom-buttons {
    margin-top: auto;
  }

  &__next {
    font-size: 25px;
    outline: none;
    border: 0;
    position: relative;
    width: 40px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
      0 2px 2px rgba(0, 0, 0, 0.3), 0 0 4px 1px rgba(0, 0, 0, 0.2),
      inset 0 3px 2px rgba(255, 255, 255, 0.22),
      inset 0 -3px 2px rgba(0, 0, 0, 0.15),
      inset 0 20px 10px rgba(255, 255, 255, 0.12),
      0 0 4px 1px rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.2);
    &:active {
      transform: scale(1.1);
    }
  }
  &__results {
    padding: 1.5em;
  }
}
</style>

