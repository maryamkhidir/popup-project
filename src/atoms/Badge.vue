<template>
  <div class="three-stars">
    <span v-for="star in badge" :key="star">
      <Star :fill="fill" />
    </span>
  </div>
</template>

<script>
import Star from './Star.vue';

export default {
  name: "Badge",
  components: { Star },
  data() {
    return{badge: [0,1,2]}
  },
  computed: {
    fill(){
      return this.$store.state.popup.badgecolor
    }
  },
}
</script>

<style lang="scss" scoped>
.three-stars {
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  span{
    width: 42px;
    height: 42px;
    
    &:first-child, &:last-child {
      margin-top: 22px;
      width: 28px;
      height: 28px;
    }
  }
}
</style>