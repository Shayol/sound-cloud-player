<template>

  <div class="player">

    <h2 v-if="animationStageOne" class="player__track-title">{{trackTitle}}</h2>

    <div v-else class="player__content">
      <div class="player__image-wrapper">
        <img :src="trackImage" alt="track image" class="player__image">
      </div>
      <iframe id="sc-widget" width="100%" height="20%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1848538&show_artwork=false"></iframe>
    </div>

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
    },
    trackTitle: function() {
      this.animationStageOne = true;
      setTimeout(() => (this.animationStageOne = false), 100);
    }
  }
};
</script>
<style lang="scss">
.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image-wrapper {
    width: 100%;
    min-height: 200px;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

