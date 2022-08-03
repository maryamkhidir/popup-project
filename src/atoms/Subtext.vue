<template>
  <aside>
    <div 
      contenteditable="true" 
      @input="editSubtext($event)"
    >
      {{editableText}}
    </div>
    <slot></slot>
  </aside>
</template>

<script>
import Move from "./Move.vue";
export default {
    name: "Subtext",
    data() {
        return {
            subtext: "",
            editableText: ""
        };
    },
    mounted() {
        this.getSubTitle();
    },
    methods: {
        getSubTitle() {
            let defaultSubtext = this.$store.state.popup.footnote;
            this.subtext = defaultSubtext;
            this.editableText = defaultSubtext;
        },
        editSubtext(e) {
            const inputText = e.target.innerText;
            this.$store.commit("setFootnote", inputText);
        }
    },
    components: { Move }
}
</script>

<style scoped lang="scss">
  aside{
    position: absolute;
    left: calc((474px - 330px)/2);
    top: 352px;
    width: 330px;
    &:hover{
      border: 2px solid #dbd6f3;
      border-radius: 7px;
    }
  }
  div {
    color: #fff; 
  }
</style>