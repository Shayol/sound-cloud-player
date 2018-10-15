import Vue from 'vue'
import Vuex from 'vuex'
import SC from "./api/soundcloud"

Vue.use(Vuex)

const PAGE_SIZE = 6;
const HISTORY_SIZE = 5;

export default new Vuex.Store({
  state: {
    query: "",
    results: [],
    page: 0,
    next_href: '',
    history: [],
    playerData: {
      title: '',
      uri: '',
      artwork_url: '../assets/img/soundcloud-logo.jpg'
    }
  },
  mutations: {
    updateQuery(state, payload) {
      state.query = payload.value;
    },
    updateResults(state, payload) {
      state.results = payload.collection;
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
      state.page = 0;
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
        limit: PAGE_SIZE,
        linked_partitioning: 1

      }).then(function (tracks) {

        context.commit("updateResults", { collection: tracks.collection });
        context.commit('updateHistory');
        context.commit('clearPageCount');

        if (tracks.next_href) {
          context.commit("updateNextHref", { next_href: tracks.next_href });
        }
        else {
          context.commit("updateNextHref", { next_href: "" });
        }
      });
    },
    nextPage(context) {
      context.commit("updatePage");
      SC.get('/tracks', {

        q: context.state.query,
        limit: PAGE_SIZE,
        linked_partitioning: context.state.page,
        offset: context.state.page * PAGE_SIZE

      }).then(function (tracks) {

        context.commit("updateResults", { collection: tracks.collection });

        if (tracks.next_href) {
          context.commit("updateNextHref", { next_href: tracks.next_href });
        }
        else {
          context.commit("updateNextHref", { next_href: "" });
        }
      })
    }
  }
})
