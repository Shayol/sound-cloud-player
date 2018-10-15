<template>

  <div class="player">

    <transition name="fade" mode="out-in">
      <div v-if="animationStageOne" class="player__title-wrapper" key="title">
        <h2  class="player__track-title">{{trackTitle}}</h2>
      </div>
      <div v-else class="player__content" key="image">
        <div class="player__image-wrapper">
          <img :src="trackImage" @click="showWidget=true" alt="track image" class="player__image">
        </div>
        <iframe id="sc-widget" class="player__widget" :class="{visible: showWidget}" width="100%" height="20%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1848538&show_artwork=false"></iframe>
      </div>
    </transition>
    

  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SC from "@/api/soundcloud-widget";

export default {
  name: "Player",
  components: {},
  data: function() {
    return {
      widget: {},
      animationStageOne: false,
      showWidget: false
    };
  },
  mounted() {
    let widgetIframe = document.getElementById("sc-widget");
    this.widget = SC.Widget(widgetIframe);
  },
  computed: {
    newURL() {
      return this.$store.state.playerData.uri;
    },
    trackImage() {
      return this.$store.state.playerData.artwork_url;
    },
    trackTitle() {
      return this.$store.state.playerData.title;
    }
  },
  watch: {
    newURL: function(value) {
      this.widget.load(value, {
        show_artwork: false,
        auto_play: false,
        buying: false,
        sharing: false
      });
    },
    trackTitle: function() {
      this.animationStageOne = true;
      this.showWidget = false;
      setTimeout(() => (this.animationStageOne = false), 1000);
    }
  }
  // methods: {
  //   afterEnter(el, done) {
  //     this.animationStageOne = false;
  //     done();
  //   }
  // }
};
</script>
<style lang="scss">
.player {
  position: relative;
  &__title-wrapper {
    // position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  &__track-title {
    font-size: 26px;
    text-align: center;
    color: dimgray;
  }
  &__content {
    position: relative;
  }
  &__image-wrapper {
    width: 100%;
    min-height: 200px;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__widget {
    position: absolute;
    top: 0;
  }
}
.visible {
  position: static;
}

.fade-enter-active {
  transition: opacity 0.8s ease-in;
}
.fade-leave-active {
  transition: opacity 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

