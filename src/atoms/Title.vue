<template>
  <div 
    class="title" 
    contenteditable="true" 
    @input="editTitle($event)"
  >
    {{editableTitle}}
  </div>
</template>

<script>

export default {
  name: 'Title',
  data() {
    return  {
      title: "",
      editableTitle: ""
    }
  },
  mounted() {
    this.getTitle()
  },
  methods: {
    getTitle(){
      let defaultTitle  = this.$store.state.popup.title
      
      this.title = defaultTitle
      this.editableTitle = defaultTitle
    },
    editTitle(e) {
      const inputText = e.target.innerText;
      this.$store.commit('setTitle', inputText)
    }
  }
}
</script>

<style lang="scss" scoped>
  .title{
    font-weight: 600;
    font-size: 24px;
    color: #FFF;
    margin-bottom: 20px;
    line-height: 30px;
  }
</style>