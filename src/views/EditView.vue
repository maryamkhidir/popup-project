<template>
  <main>
    <header>
      <router-link class="route" to="/">Back Home</router-link>
    </header>
    <div class="main">
      <div v-if="loading">
        Loading
      </div>
      <div v-else>
        <div class="popup-editor">
          <Sidebar />
          <Editor :popupid="popupid" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Editor from "@/components/Editor.vue";

export default {
    name: "EditView",
    components: { Sidebar, Editor },
    data() {
      return  {
        popupid: null,
      }
    },
    created() {
      this.fetchPopup()
    },
    computed: {
      loading() {
        return this.$store.state.loading
      },
      popups() {
        return this.$store.state.popup
      }
    },
    methods: {
      fetchPopup(){
        let popup_id = this.$route.params.popupid
        if(popup_id) {
          this.$store.dispatch('getPopupAsync', popup_id);
        }else{
          this.$router.push("create")
        }
        this.popupid = popup_id
      },
    },
    unmounted(){
      this.$store.commit('clearPopup')
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
