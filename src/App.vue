<template>
  <div id="app" class="container">
  <div class="page">
    <router-view class="page__search"></router-view>
    <router-view class="page__player" name="player"></router-view>
    <router-view class="page__history" name="history"></router-view>
  </div>
    
  </div>
</template>

<style lang="scss">
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page {
  max-width: 960px;
  width: 100%;
  height: 100%;
  min-height: 500px;
  max-height: 600px;
  padding: 2%;
  display: flex;

  justify-content: space-between;
  &__search {
    flex-basis: 30%;
  }
  &__player {
    flex-basis: 30%;
    flex-grow: 0;
  }
  &__history {
    flex-basis: 30%;
  }
}
</style>
