<template>
  <button type="button">{{button_text}}</button>
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
</style>