<template>
  <Nav />
  <router-view/>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}

</script>

<style lang="scss">
//default styles
#app, body {
  padding: 0;
  margin: 0;
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c2c2c;
}
main {
  padding: 30px;
}
</style>
