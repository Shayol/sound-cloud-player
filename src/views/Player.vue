<template>

  <div class="player">

    <transition name="fade" mode="out-in" @enter="enter">
      <div v-if="animationStageOne" class="player__title-wrapper" key="title">
        <h2  class="player__track-title">{{trackTitle}}</h2>
      </div>
      <div v-else class="player__content" key="image">
        <div class="player__image-wrapper" :class="{'player__image-wrapper--inactive': paused}">

          <img :src="trackImage" alt="track image" class="player__image">
        </div>
        <div class="player__widget" :class="{'widget-visible': showWidget}">
          <div class="player__buttons">
            <button v-if="!paused" class="player__pause player__button" @click="player.pause()">&#10073;&#10073;</button>
            <button v-if="paused" class="player__play player__button" @click="player.play()">&#9658;</button>            
          </div>
          
          <div class="player__progress progress">
            <div :style="{width: progress}" class="progress__bar"></div>
            <div class="player__timing">
              <span v-html="currentTime" class="player__current-time"></span> 
              <span v-html="duration" class="player__duration"></span>
            </div>
            <input type="range" @input="setTime($event)"  class="progress__slider" :max="totalDuration" min="0">
          </div>
          <div @mousedown.self.prevent="showVolume = !showVolume" class="player__button player__volume">
            <svg version="1.1" class="player__volume-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	            viewBox="0 0 31.2 28.3" style="enable-background:new 0 0 31.2 28.3;" xml:space="preserve">
            <g>
              <g id="c75_volume">
                <path class="st0" d="M4.4,9.3H0V19h4.4l8.2,6.1c0,0,1.5,1.3,1.5,0c0-1.3,0-20.9,0-22.1c0-1-1.3,0-1.3,0L4.4,9.3z"/>
                <path class="st0" d="M18.8,7.4c-0.4-0.4-1.1-0.4-1.6,0c-0.4,0.4-0.4,1.1,0,1.6c1.4,1.4,2.1,3.3,2.1,5.2c0,1.9-0.7,3.7-2.1,5.2
                  c-0.4,0.4-0.4,1.1,0,1.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3c1.9-1.9,2.8-4.3,2.8-6.7C21.6,11.7,20.7,9.3,18.8,7.4z"/>
                <path class="st0" d="M21.8,3.9c-0.4-0.4-1.1-0.4-1.6,0c-0.4,0.4-0.4,1.1,0,1.6c2.4,2.4,3.6,5.5,3.6,8.7c0,3.2-1.2,6.3-3.6,8.7
                  c-0.4,0.4-0.4,1.1,0,1.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3c2.8-2.8,4.2-6.6,4.2-10.3C26.1,10.4,24.6,6.7,21.8,3.9z"
                  />
                <path class="st0" d="M25.5,0.3c-0.4-0.4-1.1-0.4-1.6,0c-0.4,0.4-0.4,1.1,0,1.6C27.3,5.3,29,9.7,29,14.1c0,4.4-1.7,8.9-5.1,12.3
                  c-0.4,0.4-0.4,1.1,0,1.6c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3c3.8-3.8,5.7-8.8,5.7-13.8C31.2,9.1,29.3,4.1,25.5,0.3z"/>
              </g>
            </g>
            </svg>
            <input type="range" ref="volume" class="player__volume-slider" :class="{'visible': showVolume}" v-model.number="volume" @input="changeVolume" @blur="showVolume = false" min="1" max="10">
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
      showVolume: false,
      player: { play() {}, pause() {} },
      totalDuration: "",
      timeNow: 0,
      paused: true,
      volume: 10
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
      if (this.$store.state.playerData.artwork_url.includes("large")) {
        return this.$store.state.playerData.artwork_url.replace(
          "large",
          "t300x300"
        );
      } else {
        return this.$store.state.playerData.artwork_url;
      }
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
    streamURL: function(url) {
      if (url) {
        this.showWidget = true;
        if (this.player.src) {
          this.player.src = url;
          this.player.load();
        } else {
          let player = new Audio(url);
          this.player = player;
        }
        this.player.addEventListener("loadeddata", this._playerHandler);
      } else {
        this.player.pause();
      }
    },
    trackTitle: function() {
      this.animationStageOne = true;
      // this.showWidget = false;
    },
    showVolume: function(value) {
      if (value) {
        this.$nextTick(() => this.$refs.volume.focus());
      }
    }
  },
  methods: {
    enter(el) {
      if (el.classList.contains("player__title-wrapper")) {
        setTimeout(() => {
          this.animationStageOne = false;
        }, 300);
      }
    },
    changeVolume() {
      this.player.volume = this.volume / 10;
    },
    hideVolume(e) {
      console.log(e.target);
      this.showVolume = false;
    },
    setTime(e) {
      this.player.currentTime = e.target.value;
    },
    _playerHandler() {
      if (this.player.readyState >= 2) {
        this.player.addEventListener("pause", () => {
          this.paused = true;
        });
        this.player.addEventListener("play", () => {
          this.paused = false;
        });

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
    height: 85%;
    min-height: 316px;
    padding: 8px;
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
    border-radius: 8px;
    position: relative;
    height: 75%;
    min-height: 316px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 8px;
    box-shadow: inset 0 3px 2px rgba(255, 255, 255, 0.22),
      inset 0 -2px 1px rgba(0, 0, 0, 0.17), inset 0 3px 2px rgba(0, 0, 0, 0.17),
      inset 0 -20px 10px rgba(255, 255, 255, 0.12),
      0 0 4px 1px rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.2),
      0 -3px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &\--inactive::after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      top: 0;
      left: 0;
      background-color: whitesmoke;
      opacity: 0.5;
    }
  }
  &__image {
    height: auto;
    max-width: 300px;
    max-height: 300px;
    width: 100%;
    display: block;
  }
  &__widget {
    visibility: hidden;
    height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.5);
    @include box-shadow;
    padding: 0 8px;
    margin-top: 1em;
  }
  &__progress {
    height: 20px;
    flex-grow: 1;
  }
  &__buttons {
    position: relative;
    width: 40px;
    height: 100%;
    margin-right: 12px;
    display: inline-block;
    height: 32px;
  }
  &__button {
    width: 40px;
    height: 32px;
    outline: none;
    border: none;
    display: inline-block;
    border-radius: 5px;
    text-align: center;
    background-color: white;
    @include box-shadow;
    cursor: pointer;
  }

  &__play,
  &__pause {
    position: absolute;
    top: 0;
    left: 0;
  }
  &__volume {
    position: relative;
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__volume-icon {
    width: 24px;
    pointer-events: none;
  }
  &__volume-slider {
    display: none;
    width: 100px;
    height: 6px;
    transform: rotate(-90deg);
    transform-origin: left bottom;
    position: absolute;
    left: 60%;
    bottom: 99%;
    appearance: none;
    outline: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: white;
    @include box-shadow;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: $green-light;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
        0 2px 2px rgba(0, 0, 0, 0.3), 0 0 4px 1px rgba(0, 0, 0, 0.2),
        inset 0 3px 2px rgba(255, 255, 255, 0.22),
        inset 0 -3px 2px rgba(0, 0, 0, 0.15), inset -1px -1px 2px $green-dark,
        inset 0 20px 10px rgba(255, 255, 255, 0.12),
        0 0 4px 1px rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.2);
    }

    &::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #b6ffc1;
      cursor: pointer;
    }
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
  &__slider {
    position: absolute;
    top: 0;
    left: 6px;
    right: 6px;
    height: 20px;
    width: calc(100% - 12px);
    opacity: 0;
    z-index: 4;
  }
}
.widget-visible {
  // position: static;
  visibility: visible;
  display: flex;
}

.visible {
  display: block;
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

