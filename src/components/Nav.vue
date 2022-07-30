<template>
  <nav>
    <Logo />
  </nav>
</template>

<script>
import Logo from '@/atoms/Logo.vue';

export default {
  name: 'Nav',
  components: { Logo }
}
</script>

<style scoped lang="scss">
nav {
  padding: 20px 30px;
  background-color: #f7f6fd;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #7761df;
    }
  }
}
</style>
