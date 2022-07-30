<template>
  <div class="wrapper">
    <div class="template" :style="{transform: 'scale(' + scale+')'}">
      <div class="template--container" :style="{background:background}">
        <div class="template--container__inner">
          <div class="template--container__wrapper">
            <div class="template--container__content">
              <div class="template--container__content-wrapper">
                <Badge />
                <Title />
                <Form />
                <Subtext />
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
import Form from "./Form.vue";
import Subtext from "@/atoms/Subtext.vue";

export default {
  name: 'PopupTemplate',
  props: {
    scale: [Number, String]
  },
  components: { Badge, Title, Form, Subtext },
  computed: {
    background(){
      return this.$store.state.popup.background
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