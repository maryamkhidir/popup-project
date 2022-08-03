<template>
  <div class="popup-description">
    <div class="wrapper">
    <div class="overlay" @click="showPreview"></div>
    <div class="popup" style="transform: scale(0.43)">
      <div class="popup--container" :style="{background:data.background}">
        <div class="popup--container__inner">
          <div class="popup--container__wrapper">
            <div class="popup--container__content">
              <div class="popup--container__content-wrapper">
                 <template v-for="element in elements" :key="element.id">
                  <component
                    :is="element.name"
                    :val="data"
                    :style="{position:'absolute', left:positions[(element.name)].left, top:positions[(element.name)].top}"
                  />
                 </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popup-description__box" >
      <div class="script" :title="title">
        {{`${title.slice(0, 20)} ...`}}
      </div>
      <div>
        <CopyButton :text="title" />
      </div>
    </div>
    </div>
  </div>
    
</template>

<script>
import PopupTemplate from './PopupTemplate.vue';
import CopyButton from '@/atoms/CopyButton.vue';
import Badge from '@/mini/Badge.vue';
import Title from '@/mini/Title.vue';
import Input from '@/mini/Input.vue';
import Button from '@/mini/Button.vue';
import Subtext from '@/mini/Subtext.vue';

export default {
    name: "Popup",
    props: {
      data: Object
    },
    data() {
      const tag = '<script id="poptin-pixel-script" src="https://poptin-laravel-api.herokuapp.com/pixel.js?poptin-pixel-id='+this.data.popup_id+'">'+'<'+'/script>';
      return {
        copied: false,
        title: tag,
        elements: [
          {name: "Badge",id: 0},
          {name: "Title",id: 1},
          {name: "Input",id: 2},
          {name: "Button",id: 3},
          {name: "Subtext",id: 4},
        ],
      }
    },
    computed: {
      positions(){
        let element = JSON.parse(this.data.el_order)
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
    components: { PopupTemplate, CopyButton, Badge, Title, Subtext, Input, Button}
}
</script>

<style lang="scss" scoped >
  .preview {
    position: fixed;
    top: 0;
    left: 0;
    background: aquamarine;
    width: 100%;
    height: 100%;
    z-index: 2;
    margin: 0px;
    background: rgba(0, 0, 0, 0.33);
  }
  .popup-description, .preview {
    margin: 0 20px;
    max-height: 343px;
    max-width: 350px;
    position: relative;
    margin-bottom: 49px;
    box-shadow: 1px 1px 11px 0px rgb(148 140 169 / 10%);
    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    .wrapper {
      max-height: 305px;
      cursor: pointer;
      
      .overlay{
        width: 100%;
        display: block;
        position: absolute;
        top: 0;
        padding-bottom: calc(100% - 11px);
        height: 0;
        background-color: rgba(42, 42, 42, 0.49);
        background-color: rgba(255, 255, 255, 0.21);
        z-index: 1;
      }
    }
    &__box {
      height: 40px;
      background-color: #7661df;
      box-shadow: -1px 3px 13px 2px rgb(127 114 172 / 61%);
      z-index: 2;
      position: absolute;
      left: 10;
      bottom: 0;
      padding: 10px 10px;
      color: white;
      width: calc(100% - 20px);
      font-size: 12px;
      word-break: break-all;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        background-color: #c8c0eb;
        border: unset;
        width: 80px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        height: 30px;
        cursor:pointer;
      }
      .script {
        width: calc(100% - 90px);
        margin-right: 10px;
      }
      span {
        font-size: 10px;
      }
    }

  .popup{
    max-width: 500px;
    max-height: 500px;
    height: 500px;
    width: 500px;
    text-align: center;
    position: relative;
    transition: transform 0.3s ease-out 0s;
    left: 50%;
    margin-left: -270px;
    padding: 20px;
    top: -149px;

    &--container {
      display: flex;
      position: relative;
      color: #222;
      background: transparent;
      text-align: center;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: calc( 100% - 6px);
      height: calc( 100% - 6px);

      &__inner {
        width: calc(100% - 26px);
        height: calc(100% - 26px);
        border: 3px solid white;
        border-radius: 50%;
        position: absolute;
      }

      &__wrapper {
        width: 100%;
        height: 100%;
        display: table;
      }

      &__content {
        padding: 1.25rem 3.75rem;

        &-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          .three-stars{
            z-index: 1;
          }
          .title{
            font-weight: 600;
            font-size: 24px;
            color: #FFF;
            margin-bottom: 20px;
            line-height: 30px;
            width: 354px;
          }
          div {
            color: #fff;
          }

          input {
            border: unset;
            border-radius: 16px;
            width: 330px;
            padding: 12px;
            margin-bottom: 25px;
            font-size: 18px;
            font-family: 'Poppins';

          }

           button {
            width: 354px;
            background-color: #1a1a1a;
            color: #fff;
            text-transform: uppercase;
            padding: 12px 12px;
            border-radius: 16px;
            border: unset;
            font-weight: 700;
            font-size: 24px;
            font-family: 'Poppins';
            margin-bottom: 15px;
          }
        }
        }
      }
    }
  }
</style>