import Vue from 'vue'
import Vuex from 'vuex'
import SC from "./api/soundcloud"

Vue.use(Vuex)

const PAGE_SIZE = 6;

export default new Vuex.Store({
  state: {
    query: "",
    results: [],
    page: 1,
    next_href: '',
    lastPage: false
  },
  mutations: {
    updateQuery(state, payload) {
      state.query = payload.value;
      state.page = 1;
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
    clearPageCount(state) {
      state.page = 0;
    }
  },
  actions: {
    searchTrack(context) {
      SC.get('/tracks', {
        q: context.state.query,
        limit: PAGE_SIZE,
        linked_partitioning: context.state.page - 1,
        offset: (context.state.page - 1) * PAGE_SIZE
      }).then(function (tracks) {
        context.commit("updateResults", { collection: tracks.collection });
        console.log(tracks)
        if (tracks.next_href) {
          context.commit("updateNextHref", { next_href: tracks.next_href });
          context.commit("updatePage");
        }
        else {
          context.commit("updateNextHref", { next_href: "" });
        }
      });
    },
    // searchNext(context) {
    //   SC.get(`${context.state.next_href}`).then(function (tracks) {
    //     context.commit("updateResults", { collection: tracks.collection });

    //     if (tracks.next_href) {
    //       context.commit("updateNextHref", { next_href: tracks.next_href });
    //     }
    //   });
    // }
  }
})
