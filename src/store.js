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
    page: 1,
    next_href: '',
    history: [],
    playerData: {
      title: '',
      uri: '',
      artwork_url: '@/assets/img/soundcloud-logo.jpg'
    }
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
    updatePage(state) {
      state.page++;
    },
    updatePlayer(state, { title, uri, artwork_url = '../assets/img/soundcloud-logo.jpg' }) {
      state.playerData = {
        title,
        uri,
        artwork_url
      };
    },
    clearPageCount(state) {
      state.page = 1;
    },
    updateHistory(state) {
      state.history.unshift(state.query);
      if (state.history.length > HISTORY_SIZE) {
        state.history.pop();
      }
      localStorage.setItem("history", JSON.stringify(state.history));
    },
    initializeHistory(state) {
      state.history = JSON.parse(localStorage.getItem('history')) || [];
    }
  },
  actions: {
    searchTrack(context) {
      SC.get('/tracks', {

        q: context.state.query,
        limit: MAX_PAGE,
        linked_partitioning: 1

      }).then(function (tracks) {

        context.commit("updateResults", { collection: tracks.collection });
        context.commit('updateHistory');
        context.commit('clearPageCount');

        if (tracks.next_href) {
          context.commit("updateNextHref", { next_href: tracks.next_href });
          context.commit("updatePage");
        }
        else {
          context.commit("updateNextHref", { next_href: "" });
          context.commit("clearPageCount");
        }
      });
    },
    nextPage(context) {
      context.commit("updatePage");
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
