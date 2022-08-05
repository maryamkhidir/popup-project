<template>
  <div class="subtext"> {{val.footnote}}</div>
</template>

<script>
export default {
name: "Subtext",
props:{
  val: Object
}
}
</script>

<style>
  .subtext {
    width: 330px
  }

</style>