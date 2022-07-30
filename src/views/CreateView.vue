<template>
  <main>
    <header>
      <router-link class="route" to="/">Back Home</router-link>
    </header>
    <div class="popup-editor">
      <Sidebar />
      <Editor />
    </div>
  </main>
</template>

<script>
import ShortUniqueId from 'short-unique-id';
import Sidebar from "@/components/Sidebar.vue";
import Editor from "@/components/Editor.vue";

export default {
    name: "CreateView",
    data() {
      return  {
        popupid: null,
      }
    },
    components: { Sidebar, Editor },
    created() {
      this.initializePopup()
    },
    methods: {
      initializePopup(){
        //let popup_id = this.$route.params.popupid
        let popup_id = this.$store.state.popup.popup_id
        if(!popup_id) {
          //create new id
          const uid = new ShortUniqueId({ length: 14 });
          popup_id = uid()

          //update store
          this.$store.commit('createPopup', popup_id)
        }
        this.popupid = popup_id
      },
    }
  }
</script>

<style lang="scss" scoped >
  main {
    header {
      padding: 20px 0;

      a, a:visited{
        color: #4d4c4e;
      }
    }
    .popup-editor {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 50px;
    }
  }
    
</style>
