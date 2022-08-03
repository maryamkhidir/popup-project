<template>
  <aside>
    <button type="button">{{button_text}}</button>
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'Button',
  computed: {
    button_text(){
      return this.$store.state.popup.button_text
    }
  },
}
</script>

<style scoped lang="scss">
  aside{
    position: absolute;
    top: 277px;
    left: calc((474px - 354px)/2);
    width: 354px;
    &:hover{
      border: 2px solid #dbd6f3;
      border-radius: 7px;
    }
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
  }
</style>