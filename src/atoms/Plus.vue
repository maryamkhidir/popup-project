<template>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
  </button>
</template>

<script>
import Button from './Button.vue'
export default {
  components: { Button },
name:'Plus'
}
</script>

<style lang="scss" scoped>
  svg {
    width: 16px;
    height: 16px;
  }
  button{
    border: 0;
    padding: 0;
    background: unset;
    cursor: pointer;
  }
</style>
