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
    width: 354px;
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