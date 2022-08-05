<template>
  <aside>
    <input :placeholder="placeholder" />
    <slot></slot>
  </aside>
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
  aside{
    position: absolute;
    top: 200px;
    left: calc((474px - 354px)/2);
    width: 354px;
  }
  input {
    width: 330px;
    border: unset;
    border-radius: 16px;
    padding: 12px;
    font-size: 18px;
    font-family: 'Poppins';

    &:focus-visible{
      outline: #e07f66 auto 1px;
    }
  }

</style>