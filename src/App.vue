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
  justify-content: space-between;
  &__search {
    flex-basis: 30%;
  }
  &__player {
    flex-basis: 30%;
    flex-grow: 0;
    max-width: 30%;
  }
  &__history {
    flex-basis: 30%;
  }
}
</style>
