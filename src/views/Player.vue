<template>

  <div class="player">

    <transition name="fade" mode="out-in" @enter="enter">
      <div v-if="animationStageOne" class="player__title-wrapper" key="title">
        <h2  class="player__track-title">{{trackTitle}}</h2>
      </div>
      <div v-else class="player__content" key="image">
        <div class="player__image-wrapper"  @click="showWidget=true" :class="{'player__image-wrapper--short': showWidget}">
          <img :src="trackImage" alt="track image" class="player__image">
        </div>
        <div class="player__widget" :class="{visible: showWidget}">
          <button class="player__play" @click="player.play()">Play</button>
          <button class="player__pause" @click="player.pause()">Pause</button>
          <span>{{duration}}</span>
        </div>
      </div>
    </transition>
    

  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import SC from "@/api/soundcloud-widget";
// import SC from "@/api/soundcloud";
import CLIENT_ID from "@/api/soundcloud-client-id";

export default {
  name: "Player",
  components: {},
  data: function() {
    return {
      widget: {},
      animationStageOne: false,
      showWidget: false,
      player: {},
      duration: 0
    };
  },
  mounted() {
    let widget = document.querySelector(".player__widget");
    this.widget = widget;
  },
  computed: {
    streamURL() {
      return `${
        this.$store.state.playerData.stream_url
      }?client_id=${CLIENT_ID}`;
    },
    trackImage() {
      return this.$store.state.playerData.artwork_url;
    },
    trackTitle() {
      return this.$store.state.playerData.title;
    }
  },
  watch: {
    showWidget: function(value) {
      if (value && this.streamURL) {
        let player = new Audio(this.streamURL);
        this.player = player;

        this.player.addEventListener("loadeddata", () => {
          if (this.player.readyState >= 2) {
            this.player.play();
            this.duration = parseInt(this.player.duration);
          }
        });

        // this.widget.play();
      } else {
        this.player.pause();
      }
    },
    trackTitle: function() {
      this.animationStageOne = true;
      this.showWidget = false;
    }
  },
  methods: {
    enter(el, done) {
      if (el.classList.contains("player__title-wrapper")) {
        this.animationStageOne = false;
      }
    }
  }
};
</script>
<style lang="scss">
.player {
  position: relative;
  &__title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    height: 100%;
  }
  &__track-title {
    font-size: 26px;
    color: dimgray;
    display: inline-block;
    margin-top: auto;
    margin-bottom: auto;
  }
  &__content {
    position: relative;
  }
  &__image-wrapper {
    min-height: 200px;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 10px;
    z-index: 8;
    &\--short {
      height: 85%;
    }
  }
  &__image {
    height: auto;
    width: auto;
    max-width: 100%;
    display: inline-block;
  }
  &__widget {
    position: absolute;
    visibility: hidden;
  }
}
.visible {
  position: static;
  visibility: visible;
  display: block;
  width: 100%;
}

.player__content.fade-enter-active {
  transition: opacity 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}
.player__title-wrapper.fade-leave-active {
  transition: opacity 1.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

