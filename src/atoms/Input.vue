<template>
  <input :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'Input',
  computed: {
    placeholder(){
      return this.$store.state.popup.placeholder
    }
  },
}
</script>

<style scoped lang="scss">
  input {
    border: unset;
    border-radius: 16px;
    width: calc( 100% - 24px );
    padding: 12px;
    margin-bottom: 25px;
    font-size: 18px;
    font-family: 'Poppins';

    &:focus-visible{
      outline: #e07f66 auto 1px;
    }
  }

</style>