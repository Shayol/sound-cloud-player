<template>
  <div id="app">
  <div class="page">
    <router-view class="page__search"></router-view>
    <router-view class="page__player" name="player"></router-view>
    <router-view class="page__history" name="history"></router-view>
  </div>
    
  </div>
</template>

<style lang="scss">
.page {
  display: flex;
  min-height: 600px;
  height: 100%;
  &__search {
    flex-basis: 33.33%;
  }
  &__player {
    flex-basis: 33.33%;
  }
  &__history {
    flex-basis: 33.33%;
  }
}
</style>
