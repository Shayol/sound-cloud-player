<template>
  <div id="app" class="container">
  <div class="page">
    <router-view class="page__search page__item"></router-view>
    <router-view class="page__player page__item" name="player"></router-view>
    <router-view class="page__history page__item" name="history"></router-view>
  </div>
    
  </div>
</template>

<style lang="scss">
.container {
  height: 100vh;
  min-width: 320px;
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
  flex-wrap: wrap;

  justify-content: space-between;
  &__item {
    flex-basis: 100%;
    margin-bottom: 10%;
  }

  @media (min-width: $tablet) {
    justify-content: space-around;
    &__search {
      flex-basis: 50%;
    }
    &__player {
      flex-basis: 40%;
      flex-grow: 0;
    }
    &__history {
      flex-basis: 100%;
    }
  }
  @media (min-width: $desktop) {
    &__item {
      flex-basis: 30%;
      margin-bottom: 0;
    }
  }
}
</style>
