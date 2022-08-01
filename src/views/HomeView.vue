<template>
  <main class="home">
    <header>
      <h2>Popups</h2>
      <button @click="createPopup">Create Popup</button>
    </header>
    <div class="main">
      <div v-if="loading">
        Loading
      </div>
      <div v-else>
        <div class="popup-view" v-if="popups.length">
          <div class="popups" v-for="popup in popups" :key="popup.id">
            <Popup :data="popup" />
          </div>
        </div>
        <div v-else>You don't have popups yet.</div>
      </div>
    </div>
  </main>
</template>

<script>
import ShortUniqueId from 'short-unique-id';
import Popup from '@/components/Popup.vue';

export default {
    name: "HomeView",
    computed: {
        loading() {
            return this.$store.state.loading;
        },
        popups() {
            return this.$store.state.popups;
        }
    },
    methods: {
      createPopup() {
        const uid = new ShortUniqueId({ length: 8 });
        const popup_id = uid();
        this.$store.commit("createPopup", popup_id);
        this.$router.push({ name: "create", params: { popupid: popup_id } });
      }
    },
    mounted() {
      //if(! this.$store.state.popups.length){
        this.$store.dispatch('fetchPopupsAsync');
      //}
    },
    components: { Popup }
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #7761df;
      border: unset;
      width: 150px;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 600;
      height: 43px;
      color: #FFF;
      cursor: pointer;
    }
  }
  .main {
    padding: 50px 40px 30px 40px;
    box-shadow: -1px 3px 11px 0px rgb(127 114 172 / 61%);
    margin-top: 30px;
    border-radius: 4px;
  }
  .popup-view {
    display: flex;
    flex-wrap: wrap;
  }
</style>
