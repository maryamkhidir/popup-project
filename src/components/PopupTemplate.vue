<template>
  <div class="wrapper" >
    <div class="template" :style="{transform: 'scale(' + scale+')'}">
      <div class="template--container" :style="{background:background}">
        <div class="template--container__inner">
          <div class="template--container__wrapper" >
            <div class="template--container__content" >
              <div class="template--container__content-wrapper"
                  @drop="drop($event)"
                  @dragover.prevent
                  @dragenter.prevent
                  >
                 <template v-for="element in elOrder" :key="element.id">
                    <component
                      :is="element.name"
                      :id="element.name.toLowerCase()" 
                      draggable="true"
                      @dragstart="dragStart($event, element.name.toLowerCase())"
                      class="draggable"
                      @mouseover="showMove(element.name.toLowerCase()+'-move')" @mouseout="hideMove(element.name.toLowerCase()+'-move')"
                      :style="{position:'absolute', left:positions[(element.name)].left, top:positions[(element.name)].top}"
                    >
                    <button :id="element.name.toLowerCase()+'-move'" class="move-button" title="Move">
                      <Move />
                    </button>
                    </component> 
                  </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/atoms/Title.vue";
import Badge from "@/atoms/Badge.vue";
import Input from '@/atoms/Input.vue';
import Button from '@/atoms/Button.vue';
import Subtext from "@/atoms/Subtext.vue";
import draggable from 'vuedraggable';
import Move from "@/atoms/Move.vue";

export default {
  name: 'PopupTemplate',
  props: {
    scale: [Number, String]
  },
  data() {
    return {
      elOrder: [
        {name: "Badge",id: 0},
        {name: "Title",id: 1},
        {name: "Input",id: 2},
        {name: "Button",id: 3},
        {name: "Subtext",id: 4},
      ],
    }
  },
  components: { draggable, Badge, Title, Subtext, Input, Button, Badge, Button, Move },
  computed: {
    background(){
      return this.$store.state.popup.background
    },
    positions(){
      let element = this.$store.state.positions
      element
      let components = {};
      Object.keys(element).forEach(name => {
        if(typeof(name) == 'string'){
          let capName = name.charAt(0).toUpperCase() + name.substring(1, name.length).toLowerCase()  
          components[capName] = element[name]
        }
      })
      return components
    }
  },
  methods: {
    showMove(name){
      document.getElementById(name).style.display = "block"
    },
    hideMove(name){
      document.getElementById(name).style.display = "none"
    },
    dragStart(event,name) {
      let style = window.getComputedStyle(event.target, null);

      let position = name+","+(parseInt(style.getPropertyValue("left"),10) - event.clientX)+","+(parseInt(style.getPropertyValue("top"),10) - event.clientY)+","+parseInt(style.getPropertyValue("width"),10)+","+parseInt(style.getPropertyValue("height"),10)

      event.dataTransfer.setData("position", position)
    },
    drop(event) { 
      let position = event.dataTransfer.getData("position").split(",");
      let name = position[0];
      let component = document.getElementById(name);

      //create boundary for drop
      const VP = 474; const mid = VP/2; //container square width and midpoint
      
      let x = event.clientX + parseInt(position[1],10) //x-coordinate
      let y = event.clientY + parseInt(position[2],10) //y-coordinate

      let w = parseInt(position[3],10) //width of component
      let h = parseInt(position[4],10) //height of component
      let xMax = parseInt((VP-w), 10) //max position from left
      let yMax = parseInt(((VP-h)), 10) //max position from top

      let xPad = 0; let xMin = 0; let range = 10;
      let minDepth = 20 //min depth allowed to remain in the circle
      let maxDepth = (VP-(h+minDepth)) //max depth allowed to remain in the circle

      //Calculate padding to force item to remain in circle
      if(y<=minDepth) { 
        //top corners of the circle
        xPad = (mid/minDepth)*range
      }else if(y > minDepth &&  y <= maxDepth){
        //for the mid parts of the circle
        xPad = (y<mid) ? (mid/y)*range : (mid/(VP-y))*2*range; 
        //xPad = (y<mid) ? (mid/y)*range : (VP/(VP-y))*1.5*range; 
      }else { 
        //for the bottom of the circle
        xPad = (VP/(VP-y))*range;
      }

      //enforce circle boundry for components with width smaller than the current segment
      let remainingBreadth = (VP-(xPad*2)) //room left horizontally
      if(w <= remainingBreadth){
        xMin = parseInt((xPad), 10)
        xMax = parseInt((VP - (w+(xMin))), 10)
      }

      const newX = (x<xMin) ? xMin+"px" : (x>xMax) ? xMax+"px" : x+"px"
      const newY = (y<0) ? "0px" : (y>yMax) ? yMax+"px" : y+"px"

      component.style.left = newX;
      component.style.top =  newY;
  
      this.$store.commit('savePositions', [name,{name, left: newX, top: newY}])

    }
  }
}
</script>

<style lang="scss" scoped>
  .draggable {
    cursor: pointer;
    .move-button {
      background: transparent;
      border: unset;
      position: absolute;
      bottom: -27px;
      right: -26px;
      cursor: move;
      display: none;
    }
  }
  .wrapper{
    width: 100%;
    height: 550px;
    text-align: center;
    padding: 30px;
    padding-top: 50px;
  }
 .template{
    max-width: 500px;
    max-height: 500px;
    height: 500px;
    width: 500px;
    text-align: center;
    position: relative;
    transition: transform 0.3s ease-out 0s;
    left: 50%;
    margin-left: -250px;

    @media screen and (min-width: 769px) {
      position: relative;
    }

    &--container {
      position: relative;
      display: block;
      background-color: transparent;
      color: #222;
      text-align: center;
      border-radius: 50%;

      &:after {
        display: block;
        padding-bottom: 100%;
        width: 100%;
        height: 0;
        border-radius: 50%;
        background-color: transparent;
        content: "";
      }

      &__inner {
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: 10px;
        right: 10px;
        width: calc(100% - 26px);
        height: calc(100% - 26px);
        border: 3px solid white;
        border-radius: 50%;
      }
      &__wrapper {
        display: table;
        width: 100%;
        height: 100%;
      }

      &__content {
        width: 100%;
        height: 100%;

        &-wrapper {
          position: relative;
          height: 100%;

        }

      }

    }
    
  }

</style>