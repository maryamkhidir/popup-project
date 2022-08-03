<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h3>Settings</h3>
    </div>
    <div class="sidebar__elements">

      <CollapsiblePanel 
        title="General"
      >
        <div class="title">Background Color</div>
        <Sketch v-model="background_color" style="max-width:300px" ></Sketch>
      </CollapsiblePanel>

      <CollapsiblePanel 
        title="Input Field" 
      >
        <div class="title">Name</div>
        <input v-model="placeholder" />
      </CollapsiblePanel>
  
      <CollapsiblePanel 
        title="Button" 
      >
        <div class="title">Button Text</div>
        <input v-model="button_text" />
      </CollapsiblePanel>
      
    </div>
  </div>
</template>

<script>
import { Sketch } from '@ckpack/vue-color';
import CollapsiblePanel from '@/atoms/CollapsiblePanel.vue';
var tinycolor = require("tinycolor2");

export default {
  name: 'Sidebar',
  components: {
    Sketch,
    CollapsiblePanel
  },
  mounted() {
    this.setDefaultSettings()
  },
  computed: {
    background_color: {
      get () {
        return this.$store.state.popup.background
      },
      set (value) {
        let color = value.hex8
        let badgeColor = tinycolor(color).darken(20).toString()

        this.$store.commit('setBackground', {color, badgeColor })
      }
    },
    button_text: {
      get () {
        return this.$store.state.popup.button_text
      },
      set (value) {
        this.$store.commit('setButtonText', value)
      }
    },
    placeholder: {
      get () {
        return this.$store.state.popup.placeholder
      },
      set (value) {
        this.$store.commit('setPlaceholder', value)
      }
    }
  },
  methods: {
    setDefaultSettings(){
      this.colors = this.$store.state.popup.background
      this.button_text = this.$store.state.popup.button_text
      this.placeholder = this.$store.state.popup.placeholder
    },
  }
}
</script>

<style lang="scss" scoped >

  .sidebar{
    flex: 100%;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 15%);
    border-radius: 9px;

    &__header {
      padding: 5px 15px;
      background-color: #7761df;
      color: #FFF;
      border-radius: 9px 9px 0 0;
    }

    &__elements {
      border-radius: 0 0 9px 9px;
      padding: 15px 30px;
    }

    @media screen and (min-width: 769px) {
      flex: 33%;
    }
  }
</style>
