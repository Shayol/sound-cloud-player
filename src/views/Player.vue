<template>

  <div class="player">

    <transition name="fade" mode="out-in" @enter="enter">
      <div v-if="animationStageOne" class="player__title-wrapper" key="title">
        <h2  class="player__track-title">{{trackTitle}}</h2>
      </div>
      <div v-else class="player__content" key="image">
        <div class="player__image-wrapper"  @click="showWidget=true">
          <img :src="trackImage" alt="track image" class="player__image">
        </div>
        <div class="player__widget" :class="{visible: showWidget}">
          <div class="player__buttons">
            <button v-if="!player.paused" class="player__pause" @click="player.pause()">&#10073;&#10073;</button>
            <button v-if="player.paused" class="player__play" @click="player.play()">&#9658;</button>
            
          </div>
          
          <div class="player__progress progress">
            <div :style="{width: progress}" class="progress__bar"></div>
            <div class="player__timing">
              <span v-html="currentTime" class="player__current-time"></span> 
              <span v-html="duration" class="player__duration"></span>
            </div>
          </div>
        </div>
      </div>
    </transition>
    

  </div>
  
</template>

<script>
// @ is an alias to /src
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
      return this.$store.state.playerData.artwork_url.replace(
        "large",
        "t300x300"
      );
    },
    trackTitle() {
      return this.$store.state.playerData.title;
    },
    duration() {
      return this.totalDuration ? this._parseTime(this.totalDuration) : "";
    },
    currentTime() {
      return this.timeNow
        ? this._parseTime(this.timeNow) +
            "<span class='player__separator'>/</span>"
        : "";
    },
    progress() {
      return this.timeNow
        ? parseInt((this.timeNow / this.totalDuration) * 100) + "%"
        : "0%";
    }
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
        setTimeout(() => {
          this.animationStageOne = false;
        }, 200);
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
      ].join("<span class='player__colons'>:</span>");
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
    color: #555;
    display: inline-block;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
    font-weight: bold;
    text-shadow: 2px 2px 5px #555;
  }
  &__content {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__image-wrapper {
    height: 85%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 10px;
    z-index: 8;
    box-shadow: inset 0 3px 2px rgba(255, 255, 255, 0.22),
      inset 0 -3px 2px rgba(0, 0, 0, 0.17),
      inset 0 20px 10px rgba(255, 255, 255, 0.12),
      0 0 4px 1px rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }
  &__image {
    height: auto;
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    display: block;
  }
  &__widget {
    position: absolute;
    visibility: hidden;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
      0 2px 2px rgba(0, 0, 0, 0.3), 0 0 4px 1px rgba(0, 0, 0, 0.2),
      inset 0 3px 2px rgba(255, 255, 255, 0.22),
      inset 0 -3px 2px rgba(0, 0, 0, 0.15),
      inset 0 20px 10px rgba(255, 255, 255, 0.12),
      0 0 4px 1px rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.2);
    position: absolute;
    padding: 0 8px;
  }
  &__progress {
    height: 20px;
    width: 100%;
  }
  &__buttons {
    position: relative;
    width: 24px;
    height: 100%;
    margin-right: 8px;
    display: inline-block;
    height: 20px;
  }
  &__play,
  &__pause {
    width: 24px;
    height: 20px;
    outline: none;
    border: none;
    display: inline-block;
    border-radius: 5px;
    text-align: center;
    background-color: white;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
      0 2px 2px rgba(0, 0, 0, 0.3), 0 0 4px 1px rgba(0, 0, 0, 0.2),
      inset 0 3px 2px rgba(255, 255, 255, 0.22),
      inset 0 -3px 2px rgba(0, 0, 0, 0.15),
      inset 0 20px 10px rgba(255, 255, 255, 0.12),
      0 0 4px 1px rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
  }
  &__duration {
    color: black;
    font-weight: bold;
    padding-bottom: 2px;
  }
  &__current-time {
    color: black;
    font-weight: bold;
    padding-bottom: 2px;
  }
  &__timing {
    position: absolute;
    font-size: 8px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    display: flex;
    align-items: center;
  }
  &__colons {
    display: inline-block;
    margin-left: 2px;
    margin-right: 2px;
  }
  &__separator {
    display: inline-block;
    margin-left: 4px;
    margin-right: 4px;
  }
}
.progress {
  /* Can be anything */
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  background: #818181;
  border-radius: 20px;
  padding: 4px 6px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);

  &__bar {
    width: 0%;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-image: linear-gradient(to bottom, #b6ffc1, #50b561);
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
      inset 0 -2px 6px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
  }
}
.visible {
  position: static;
  visibility: visible;
  display: flex;
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

