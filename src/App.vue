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
  height: 100%;
  min-width: 320px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.page {
  max-width: 960px;
  width: 100%;
  min-height: 500px;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  justify-content: space-between;
  &__search {
    flex-shrink: 0;
  }
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
    max-height: 600px;
    &__item {
      flex-basis: 30%;
      margin-bottom: 0;
    }
  }
}
</style>
