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
                <div class="three-stars">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="data.badgeColor">
                      <path
                        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                      </path>
                    </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="data.badgeColor">
                      <path
                        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                      </path>
                    </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="data.badgeColor">
                      <path
                        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                      </path>
                    </svg></span>
                </div>
                <div class="title">
                  {{data.title}}
                </div>
                <form action="#" method="GET">
                  <input placeholder="E-mail" /><button type="button">
                     {{data.button_text}}
                  </button>
                </form>
                <div> {{data.footnote}}</div>
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

export default {
    name: "Popup",
    props: {
      data: Object
    },
    data() {
      return {
        copied: false,
        title: `<script id="poptin-pixel-script" src="https://poptin-laravel-api.herokuapp.com/pixel.js?poptin-pixel-id=${this.data.popup_id}" />`
      }
    },
    components: { PopupTemplate, CopyButton },
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
    background-color: #4d4c4e;
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

  .three-stars {
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  span{
    width: 42px;
    height: 42px;
    
    &:first-child, &:last-child {
      margin-top: 22px;
      width: 28px;
      height: 28px;
    }
  }
}
        }
        }
      }
    }
  }
</style>