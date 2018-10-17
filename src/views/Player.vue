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
          <span class="player__current-time">{{currentTime}}</span> 
          <span class="player__duration">{{duration}}</span>
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
      totalDuration: "",
      timeNow: ""
    };
  },
  mounted() {},
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
    },
    duration() {
      return this.totalDuration ? this._parseTime(this.totalDuration) : "";
    },
    currentTime() {
      return this.timeNow ? this._parseTime(this.timeNow) + "/" : "";
    },
    progress() {}
  },
  watch: {
    showWidget: function(value) {
      if (value && this.streamURL) {
        let player = new Audio(this.streamURL);
        this.player = player;

        this.player.addEventListener("loadeddata", this._playerHandler);
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
    },
    _playerHandler() {
      if (this.player.readyState >= 2) {
        this.player.play().then(() => {
          this.player.addEventListener("timeupdate", () => {
            this.timeNow = parseInt(this.player.currentTime);
          });
          this.totalDuration = parseInt(this.player.duration);
        });
      }
    },
    _parseTime(t) {
      let min = Math.floor(t / 60);
      let hour = Math.floor(min / 60);
      min = min % 60;
      let sec = t % 60;
      let time = [
        ("0" + hour).slice(-2),
        ("0" + min).slice(-2),
        ("0" + sec).slice(-2)
      ].join(":");
      return time;
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

