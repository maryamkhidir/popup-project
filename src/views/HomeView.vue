<template>
  <main class="home">
    <header>
      <h2>Popups</h2>
      <button @click="createPopup">Create Popup</button>
    </header>
  </main>
</template>

<script>
import ShortUniqueId from 'short-unique-id';

export default {
  name: 'HomeView',
  methods: {
    createPopup() {
      const uid = new ShortUniqueId({ length: 14 });
      const popup_id = uid()

      this.$store.commit('createPopup', popup_id)

      this.$router.push({ name: 'create', params: { popupid: popup_id } })
    }
  }
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
</style>
