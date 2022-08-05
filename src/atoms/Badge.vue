<template>
  <aside>
    <div class="three-stars">
      <span v-for="star in badge" :key="star">
        <Star :fill="fill" />
      </span>
    </div>
    <slot></slot>
  </aside>
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
      return this.$store.state.popup.badgeColor
    }
  },
}
</script>

<style lang="scss" scoped>
  aside{
    position: absolute;
    top: 20px;
    left: calc((474px - 150px)/2);
    z-index: 1;
    width: 150px;
  }
.three-stars {
  display: flex;
  justify-content: space-between;

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