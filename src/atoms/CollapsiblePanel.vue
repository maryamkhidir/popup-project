<template>
  <div class="collapsible-panel">
    <div class="collapsible-panel--header">
      <h3>{{title}}</h3>
      <Plus @click="toggleOpen" />
    </div>

    <div 
      class="collapsible-panel--body"
      :class="{'show': isOpen}"
    >
      <div class="collapsible-panel--body__wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Plus from './Plus.vue';
export default {
    name: "CollapsiblePanel",
    data() {
      const status = this.title === "General" ? true : false
      return {
        isOpen: status
      }
    },
    props: {
        title: String,
    },
    components: { Plus },
    methods: {
      toggleOpen(){
        this.isOpen = !this.isOpen
      }
    }
}
</script>

<style lang="scss">
  .collapsible-panel {
    box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
    margin-bottom: 30px;
    border-radius: 4px;


    &--header {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding: 5px 20px;
      background-color: #EEEFFF;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 4px 4px 0 0;
    }  

    &--body {
      -webkit-transition: max-height .5s; 
      -moz-transition: max-height .5s; 
      -ms-transition: max-height .5s; 
      -o-transition: max-height .5s; 
      transition:  max-height .5s ease-in-out 0s; 
      overflow: hidden;
      // "height: 0" not work with css transitions
      max-height: 0;

      &.show{
        max-height: 500px;
      }

      &__wrapper {
        padding: 15px 30px;
        padding-bottom: 40px;
      }
      
      .title{
        margin-bottom: 7px;
        font-size: 14px;
        font-weight: 500;
        color: rgb(122, 122, 122);
      }
      input {
        width: calc( 100% - 32px );
        border: 1px solid rgb(208, 204, 204);
        height: 40px;
        padding: 7px 16px;
        font-size: 16px;
        font-family: 'Poppins';
        border-radius: 3px;
        color: rgb(100, 105, 111);

        &:focus-visible{
          outline: #7761df auto 1px;
        }
      }
    }
  }
</style>