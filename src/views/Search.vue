<template>
  <div class="search">
    
    <form action="" @submit.prevent="searchTrack" class="search__form">
      <div class="search__input-wrapper">
        <input placeholder="Search..." spellcheck="false" type="text" v-model.trim="query" class="search__input">
        <svg v-show="query" class="search__delete" @click ="query=''" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 13.5 15.3" style="enable-background:new 0 0 13.5 15.3;" xml:space="preserve">
          <g>
            <rect x="6.3" y="-1" transform="matrix(0.7572 -0.6532 0.6532 0.7572 -3.3576 6.2765)" width="1" height="17.4"/>
            <polygon points="1.5,0 0,1.3 12,15.3 13.5,14 1.5,0 	"/>
          </g>
          <g>
            <rect x="-1.9" y="7.2" transform="matrix(0.6477 -0.7619 0.7619 0.6477 -3.4491 7.8492)" width="17.4" height="1"/>
            <polygon points="12,0 0,14 1.6,15.3 13.5,1.3 12,0 	"/>
          </g>
        </svg>
      </div>
      <button type="submit" class="search__submit">
        Go
      </button>
    </form>

    <p v-show="notFound" class="search__not-found">
      Not found
    </p>

    <ol class="search__results" :class="{thumbnails: thumbnails}">
      <SearchResult v-for="(item,index) in pageResults" :index="index" :page="page" :key="item.id" :search-result="item"/>
    </ol>
    

    <div class="search__bottom-buttons">
        
        <svg v-if="page > 0" @click="prevPage" class="search__prev search__bottom-button search__nav"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 297.5 297.5" style="enable-background:new 0 0 297.5 297.5;" xml:space="preserve">
        <polygon points="0,149.2 149.5,264.3 149.5,197.3 297.5,197.3 297.5,98.3 149.5,98.3 149.5,33.3 "/>
        </svg>

        <svg v-if="!lastPage" @click="nextPage" class="search__next search__bottom-button search__nav" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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

import SearchResult from "@/components/SearchResult";
export default {
  name: "Search",
  components: {
    SearchResult
  },
  created() {
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
    page: {
      get() {
        return this.$store.state.page;
      },
      set(value) {
        this.$store.commit("updatePage", { value: value });
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
    },
    notFound() {
      return this.$store.state.notFound;
    }
  },
  methods: {
    searchTrack() {
      if (this.query) {
        this.$store.dispatch("searchTrack");
      }
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
    prevPage() {
      if (this.page > 0) {
        this.page--;
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

  &__input-wrapper {
    flex-grow: 1;
    position: relative;
  }

  &__input {
    height: 56px;
    border-radius: 0;
    color: white;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 8px 32px 8px 16px;
    width: 100%;

    opacity: 0.8;
    &:focus {
      opacity: 1;
      ~ .search__delete {
        opacity: 1;
        z-index: 2;
      }
    }

    background: #818181;
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.5),
      inset 0 -4px 8px rgba(0, 0, 0, 0.5);

    &::placeholder {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 16px;
      color: white;
    }
  }
  &__form {
    display: flex;
  }
  &__submit {
    width: 25%;
    position: relative;
    border: none;
    height: 56px;
    background-image: linear-gradient(to bottom, #818181, #555);
    color: white;
    opacity: 0.8;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  &__delete {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    padding: 4px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 100%;
    fill: rgb(194, 8, 8);
    display: block;
    z-index: -1;
    opacity: 0;
  }
  &__bottom-buttons {
    margin-top: auto;
    display: flex;
    padding: 1em;
  }

  &__nav {
    outline: none;
    border: 0;
    position: relative;
    width: 60px;
    height: 32px;
    background-color: rgba(255, 255, 255, 0.5);
    @include box-shadow;
    &:active {
      transform: scale(1.1);
    }
  }
  &__prev {
    margin-right: 4px;
  }
  &__display-pref {
    margin-left: auto;
    display: flex;
  }
  &__display-list {
    height: 32px;
  }
  &__display-thumbnails {
    width: 32px;
    height: 32px;
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
    padding: 1em;
  }
  &__not-found {
    padding: 1em;
    font-weight: bold;
  }
}
.thumbnails {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-grow: 1;
  align-content: space-around;
}

@media (min-width: $tablet) {
  .search {
    // @include box-shadow;

    &__input {
      height: 40px;
    }
    &__submit {
      height: 40px;
    }
  }
}
@media (min-width: $desktop) {
}
</style>

