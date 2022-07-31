<template>
  <div class="wrapper">
    <div class="template" :style="{transform: 'scale(' + scale+')'}">
      <div class="template--container" :style="{background:background}">
        <div class="template--container__inner">
          <div class="template--container__wrapper">
            <div class="template--container__content">
              <div class="template--container__content-wrapper">
                <draggable v-model="elOrder"
                class="template--container__content-wrapper"
                group="people" 
                @start="drag=true" 
                @end="drag=false" 
                item-key="id">
                  <template #item="{element}">
                    <component :key="element.id" :is="element.name"></component> 
                  </template>
                </draggable>
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

export default {
  name: 'PopupTemplate',
  props: {
    scale: [Number, String]
  },
  data() {
    return {
      drag: false,
    }
  },
  components: { draggable, Badge, Title, Subtext, Input, Button },
  computed: {
    background(){
      return this.$store.state.popup.background
    },
    elOrder: {
      get() {
       return this.$store.state.elOrder
      },
      set(value) {
        this.$store.commit('updateElOrder', value)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
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
        display: table-cell;
        padding: 1.25rem 3.75rem;

        &-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

       
        /* @media screen and (max-width: 768px) {
          padding: 2rem 3.5rem;
        }
        @media screen and (max-width: 480px) {
          padding: 1.2rem 2.5rem;
        } */
      }

    }
    
  }

</style>