<template>
  <div class="search">
    
    <form action="" @submit.prevent="searchTrack" class="search__form">
      <input type="text" v-model="query" class="search__input">
      <button type="submit" class="search__submit">
        Go
      </button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Search",
  components: {},
  methods: {},
  computed: {
    query: {
      get() {
        return this.$store.state.query;
      },
      set(value) {
        this.$store.commit("updateQuery", value);
      }
    }
  },
  methods: {
    searchTrack() {
      this.$store.dispatch("searchTrack");
    }
  }
};
</script>
