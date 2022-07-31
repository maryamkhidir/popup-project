<template>
  <div class="popup-description">
    <div class="wrapper">
    <div class="overlay"></div>
    <div class="popup" style="transform: scale(0.43)">
      <div class="popup--container" :style="{background:data.background}">
        <div class="popup--container__inner">
          <div class="popup--container__wrapper">
            <div class="popup--container__content">
              <div class="popup--container__content-wrapper">
                <component
                  v-for="name in orderedComponents"
                  :is="name"
                  v-bind:key="name"
                  :val="data"
                />
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
        title: tag
      }
    },
    computed: {
      orderedComponents: function () {
        let elOrder = JSON.parse(this.data.el_order)
        let order = []
        for(let i = 0; i < elOrder.length; i++){
          order.push(elOrder[i].name)
        }
        return order
      }
    },
    components: { PopupTemplate, CopyButton, Badge, Title, Subtext, Input, Button},
}
</script>

<style lang="scss" scoped >
  .popup-description {
    padding: 0 10px;
    max-height: 301px;
    max-width: 250px;
    position: relative;
    margin-bottom: 30px;

    .wrapper {
      max-height: 300px;
      cursor: pointer;
      
      .overlay{
        width: calc(100% - 21px);
        display: block;
        position: absolute;
        top: 0;
        padding-bottom: 100%;
        height: 0;
        background-color: rgb(42 42 42 / 49%);
        box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
        z-index: 1;
      }

    }

    &__box {
      height: 40px;
      background-color: #7661df;
      box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
      z-index: 2;
      position: absolute;
      left: 10;
      bottom: 0;
      padding: 10px 10px;
      color: white;
      width: calc(100% - 41px);
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
      }

      &__content {
        padding: 1.25rem 3.75rem;

        &-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;

          .title{
            font-weight: 600;
            font-size: 24px;
            color: #FFF;
            margin-bottom: 20px;
            line-height: 30px;
          }
          div {
            color: #fff;
          }

          input {
            border: unset;
            border-radius: 16px;
            width: calc( 100% - 24px );
            padding: 12px;
            margin-bottom: 25px;
            font-size: 18px;
            font-family: 'Poppins';

          }

           button {
            width: 100%;
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