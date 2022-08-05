<template>
  <aside>
    <div 
      class="title" 
      contenteditable="true" 
      @input="editTitle($event)"
    >
      {{editableTitle}}
    </div>
    <slot></slot>
  </aside>
</template>

<script>
import Move from './Move.vue'

export default {
    name: "Title",
    data() {
        return {
            title: "",
            editableTitle: ""
        };
    },
    mounted() {
        this.getTitle();
    },
    methods: {
        getTitle() {
            let defaultTitle = this.$store.state.popup.title;
            this.title = defaultTitle;
            this.editableTitle = defaultTitle;
        },
        editTitle(e) {
            const inputText = e.target.innerText;
            this.$store.commit("setTitle", inputText);
        }
    },
    components: { Move }
}
</script>

<style lang="scss" scoped>
   aside{
    position: absolute;
    left: calc((474px - 354px)/2);
    top: 90px;
    width: 354px;
    .title{
      font-weight: 600;
      font-size: 24px;
      color: #FFF;
      line-height: 30px;
      cursor: text;
    }
  }

</style>