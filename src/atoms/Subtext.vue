<template>
  <div 
    contenteditable="true" 
    @input="editSubtext($event)"
  >
    {{editableText}}
  </div>
</template>

<script>
export default {
  name: 'Subtext',
  data() {
    return  {
      subtext: "",
      editableText: ""
    }
  },
  mounted() {
    this.getSubTitle()
  },
  methods: {
    getSubTitle(){
      let defaultSubtext  = this.$store.state.popup.footnote

      this.subtext = defaultSubtext
      this.editableText = defaultSubtext
    },
    editSubtext(e) {
      const inputText = e.target.innerText;
      this.$store.commit('setFootnote', inputText)
    }
  }
}
</script>

<style scoped lang="scss">
  div {
    color: #fff;
  }
</style>