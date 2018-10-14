import Vue from 'vue'
import Vuex from 'vuex'
import SC from "./api/soundcloud"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query: "",
    results: []
  },
  mutations: {

  },
  actions: {
    searchTrack(context) {
      SC.get('/tracks', {
        q: context.state.query, license: 'cc-by-sa'
      }).then(function (tracks) {
        console.log(tracks);
      });
    }
  }
})
