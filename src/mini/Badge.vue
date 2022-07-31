<template>
  <div class="three-stars">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="val.badgeColor">
        <path
          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
        </path>
      </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="val.badgeColor">
        <path
          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
        </path>
      </svg></span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="val.badgeColor">
        <path
          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
        </path>
      </svg></span>
  </div>
</template>

<script>
export default {
name: "Badge",
props:{
  val:Object
}
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