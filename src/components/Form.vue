<template>
  <form action="#" method="GET" >
    <Input />
    <Button />
  </form>
</template>

<script>
import Input from '@/atoms/Input.vue';
import Button from '@/atoms/Button.vue';
export default {
  name: "Form",
  components: { Input, Button },
}
</script>

<style scoped lang="scss">

</style>