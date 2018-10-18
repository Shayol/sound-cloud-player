<template>
  <div class="search">
    
    <form action="" @submit.prevent="searchTrack" class="search__form">
      <input placeholder="Search..." type="text" v-model="query" class="search__input">
      <button type="submit" class="search__submit">
        Go
      </button>
    </form>

    <ul class="search__results" :class="{thumbnails: thumbnails}">
      <SearchResult v-for="item in pageResults" :key="item.id" :search-result="item"/>
    </ul>
    
    <div class="search__bottom-buttons">
        <svg v-if="!lastPage" @click="nextPage" class="search__next search__bottom-button" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 297.5 297.5" style="enable-background:new 0 0 297.5 297.5;" xml:space="preserve">
        <polygon points="297.5,148.25 148,33.25 148,100.25 0,100.25 0,199.25 148,199.25 148,264.25 "/>
        </svg>
        <div v-show="pageResults.length > 0" class="search__display-pref">
          <svg @click="changeDisplayPref" class="search__display-list search__bottom-button" xmlns:svg="http://www.w3.org/2000/svg"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22.3 17.5"
              style="enable-background:new 0 0 22.3 17.5;" xml:space="preserve">
            <g id="g4" transform="matrix(1,0,0,-1,30.372881,1373.7966)">
              <path id="path6" d="M-27.2,1359.1v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H-30
                c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1h2.4c0.1,0,0.2,0,0.3-0.1
                S-27.2,1359.2-27.2,1359.1z M-27.2,1363.9v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H-30c-0.1,0-0.2,0-0.3,0.1
                c-0.1,0.1-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1h2.4c0.1,0,0.2,0,0.3-0.1S-27.2,1364-27.2,1363.9z
                M-27.2,1368.6v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H-30c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v2.4
                c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1h2.4c0.1,0,0.2,0,0.3-0.1S-27.2,1368.7-27.2,1368.6z M-8.1,1359.1v-2.4
                c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1h-16.7c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1h16.7
                c0.1,0,0.2,0,0.3-0.1S-8.1,1359.2-8.1,1359.1z M-27.2,1373.4v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H-30c-0.1,0-0.2,0-0.3,0.1
                c-0.1,0.1-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1h2.4c0.1,0,0.2,0,0.3-0.1S-27.2,1373.5-27.2,1373.4z
                M-8.1,1363.9v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1h-16.7c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3
                s0.2,0.1,0.3,0.1h16.7c0.1,0,0.2,0,0.3-0.1S-8.1,1364-8.1,1363.9z M-8.1,1368.6v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1h-16.7
                c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1h16.7c0.1,0,0.2,0,0.3-0.1S-8.1,1368.7-8.1,1368.6
                z M-8.1,1373.4v-2.4c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1h-16.7c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3v2.4c0,0.1,0,0.2,0.1,0.3
                s0.2,0.1,0.3,0.1h16.7c0.1,0,0.2,0,0.3-0.1S-8.1,1373.5-8.1,1373.4z"/>
            </g>
          </svg>
          <div @click="changeDisplayPref" class="search__display-thumbnails search__bottom-button">
          </div>
        </div>
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
  mounted() {
    this.$store.commit("initializeDisplayThumbnails");
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
    },
    thumbnails() {
      return this.$store.state.displayThumbnails;
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
    },
    changeDisplayPref() {
      this.$store.commit("updateDisplayThumbnails");
    }
  }
};
</script>
<style lang="scss">
.search {
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 2px 2px rgba(0, 0, 0, 0.3), 0 0 4px 1px rgba(0, 0, 0, 0.2),
    inset 0 3px 2px rgba(255, 255, 255, 0.22),
    inset 0 -3px 2px rgba(0, 0, 0, 0.15),
    inset 0 20px 10px rgba(255, 255, 255, 0.12), 0 0 4px 1px rgba(0, 0, 0, 0.1),
    0 3px 2px rgba(0, 0, 0, 0.2);
  padding: 8px;
  &__input {
    flex-grow: 1;
    height: 40px;
    border-radius: 0;
    color: white;
    border: none;
    outline: none;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 16px;
    padding: 8px 16px;

    background: #818181;
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.5),
      inset 0 -4px 8px rgba(0, 0, 0, 0.5);

    &:placeholder {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 16px;
    }
  }
  &__form {
    display: flex;
  }
  &__submit {
    width: 20%;
    border: none;
    height: 40px;
    background-image: linear-gradient(to bottom, #818181, #555);
    color: white;
  }
  &__bottom-buttons {
    margin-top: auto;
    display: flex;
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
  &__display-pref {
    margin-left: auto;
    display: flex;
  }
  &__display-list {
    height: 20px;
  }
  &__display-thumbnails {
    width: 20px;
    height: 20px;
    background-color: black;
    position: relative;
    margin-left: 8px;
    &:before {
      width: 2px;
      height: 100%;
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      z-index: 2;
    }
    &:after {
      width: 100%;
      height: 2px;
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-color: white;
      z-index: 2;
    }
  }
  &__results {
    padding: 1.5em 0;
    flex-shrink: 1;
  }
}
.thumbnails {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
</style>

