<template>
  <div class="template" ref="templateEditor">
    <div class="template__header">
      <h3>{{title}}</h3>
      <button v-if="(this.$route.name === 'edit')" @click="editPopup">
        {{edit}}
      </button>
      <button v-else @click="savePopup">
        {{save}}
      </button>
    </div>
    <div class="template__elements">
      <PopupTemplate :popupid="popupid" :scale="scale" />
    </div>
  </div>
</template>

<script>
import PopupTemplate from './PopupTemplate.vue';

export default {
  name: 'Editor',
  components: { PopupTemplate },
  props: {
    popupid: [String, Number]
  },
  data() {
    return {
      scale:1,
      edit: "UPDATE",
      save: "SAVE"
    }
  },
  computed: {
    title() {
      if((this.$route.name === "edit")) return "Edit Popup"
      else return "Create Popup"
    }
  },
  created()  {
    window.addEventListener("resize", this.getWidth);
  },
  mounted()  {
    this.getWidth()
  },
  destroyed()  {
    window.removeEventListener("resize", this.getWidth);
  },
  methods:  {
    getWidth(e)  {
      const width = this.$refs.templateEditor.clientWidth
      if(width < 550) this.scale = (width/530).toFixed(2)
    },
    savePopup() {
      this.$store.dispatch('savePopupAsync')
      this.save = "SAVING..."
      
      setTimeout(() => {
       this.$router.push('/')
      }, 2000);
      
    },
    editPopup() {
      this.$store.dispatch('updatePopupAsync')
      this.edit = "UPDATING..."
      
      setTimeout(() => {
       this.$router.push('/')
      }, 2000);
      
    }
  }
}
</script>

<style lang="scss" scoped >
  .template {
    flex: 100%;
    box-shadow: 0px 2px 10px rgb(0 0 0 / 15%);
    border-radius: 9px;
    
    &__header {
      padding: 15px;
      display: flex;
      flex-direction: row;
      background-color: #7761df;
      color: #FFF;
      border-radius: 9px 9px 0 0;
      height: 43px;
      justify-content: space-between;
      align-items: center;

      button {
        background-color: #c8c0eb;
        border: unset;
        min-width: 100px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 600;
        height: 43px;
        cursor:pointer;
      }
    }

    &__elements {
      justify-content: center;
      display: flex;
    }

    @media screen and (min-width: 769px) {
      flex: 60%;
    }

  }

</style>
