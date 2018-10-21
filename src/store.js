import Vue from 'vue'
import Vuex from 'vuex'
import SC from "./api/soundcloud"

Vue.use(Vuex)

const PAGE_SIZE = 6;
const HISTORY_SIZE = 5;
const MAX_PAGE = 50;

export default new Vuex.Store({
  state: {
    query: "",
    results: [],
    offset: 1,
    next_href: '',
    history: [],
    playerData: {
      title: '',
      stream_url: '',
      artwork_url: './soundcloud-logo.jpg'
    },
    displayThumbnails: false,
    default_img: './soundcloud-logo.jpg',
    page_size: 6,
    notFound: false,
    page: 0
  },
  mutations: {
    updateQuery(state, payload) {
      state.query = payload.value;
    },
    updateResults(state, payload) {
      state.results = payload.collection;
    },
    uppendResults(state, payload) {
      state.results.push(...payload.collection);
    },
    updateNextHref(state, payload) {
      state.next_href = payload.next_href;
    },
    updateOffset(state) {
      state.offset++;
    },
    updatePage(state, { value }) {
      state.page = value;
    },
    updatePlayer(state, { title, stream_url, artwork_url }) {
      artwork_url = artwork_url || state.default_img;
      state.playerData = {
        title,
        stream_url,
        artwork_url
      };
    },
    updateDisplayThumbnails(state) {
      state.displayThumbnails = !state.displayThumbnails;
      localStorage.setItem("display-pref", JSON.stringify(state.displayThumbnails));
    },
    clearOffsetCount(state) {
      state.offset = 1;
    },
    updateHistory(state) {
      if (state.history.indexOf(state.query) == -1) {
        state.history.unshift(state.query);
        if (state.history.length > HISTORY_SIZE) {
          state.history.pop();
        }
        localStorage.setItem("history", JSON.stringify(state.history));
      }
    },
    updateNotFound(state, payload) {
      state.notFound = payload.value;
    },
    initializeHistory(state) {
      state.history = JSON.parse(localStorage.getItem('history')) || [];
    },
    initializeDisplayThumbnails(state) {
      state.displayThumbnails = JSON.parse(localStorage.getItem('display-pref')) || false;
    }
  },
  actions: {
    searchTrack(context) {
      SC.get('/tracks', {

        q: context.state.query,
        filter: 'public',
        limit: MAX_PAGE,
        linked_partitioning: 1

      }).then(function (tracks) {

        context.commit("updateResults", { collection: tracks.collection });
        context.commit('updateHistory');
        context.commit('clearOffsetCount');
        context.commit('updatePage', { value: 0 });

        if (!context.state.results.length) {
          context.commit("updateNotFound", { value: true });
        }
        else {
          context.commit("updateNotFound", { value: false });
        }

        if (tracks.next_href) {
          context.commit("updateNextHref", { next_href: tracks.next_href });
          context.commit("updateOffset");
        }
        else {
          context.commit("updateNextHref", { next_href: "" });
          context.commit("clearOffsetCount");
        }
      });
    },
    nextPage(context) {
      context.commit("updateOffset");
      return SC.get('/tracks', {

        q: context.state.query,
        limit: MAX_PAGE,
        linked_partitioning: 1,
        offset: context.state.page * MAX_PAGE

      }).then(function (tracks) {

        context.commit("uppendResults", { collection: tracks.collection });

        if (tracks.next_href) {
          context.commit("updateNextHref", { next_href: tracks.next_href });
        }
        else {
          context.commit("updateNextHref", { next_href: "" });
        }
      })
    }
  },
  getters: {
    fullPages(state) {
      return Math.floor(state.results.length / PAGE_SIZE);
    },
    allPages(state) {
      return Math.ceil(state.results.length / PAGE_SIZE);
    },
    pageResults: (state, getters) => (page) => {
      let start = page * 6;
      let end = (page + 1) * 6;
      if (page == getters.allPages && getters.fullPages < getters.allPages) {
        return state.results.slice(start);
      }
      return state.results.slice(start, end);
    }
  }
})
