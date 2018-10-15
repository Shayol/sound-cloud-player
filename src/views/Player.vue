<template>

  <div class="player">

    <transition name="fade">
      <div class="player__title-wrapper">
        <h2 v-show="animationStageOne" class="player__track-title">{{trackTitle}}</h2>
      </div>
    </transition>
      <transition name="fade-in">
        <div v-show="!animationStageOne" class="player__content">
          <div class="player__image-wrapper">
            <img :src="trackImage" alt="track image" class="player__image">
          </div>
          <iframe id="sc-widget" width="100%" height="20%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1848538&show_artwork=false"></iframe>
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
      animationStageOne: false
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
      setTimeout(() => (this.animationStageOne = false), 100);
    },
    trackTitle: function() {
      this.animationStageOne = true;
    }
  },
  methods: {
    afterEnter(el, done) {
      this.animationStageOne = false;
      done();
    }
  }
};
</script>
<style lang="scss">
.player {
  position: relative;
  &__title-wrapper {
    position: absolute;
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
}
.fade-in-enter-active {
  transition: opacity 1.8s ease-out;
}
.fade-in-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-in;
}
.fade-leave-active {
  transition: opacity 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-leave-to {
  opacity: 0;
}
</style>

