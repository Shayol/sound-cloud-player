<template>
  <div class="search-result">
    <strong>{{searchResult.title}}</strong>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: ["searchResult"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
