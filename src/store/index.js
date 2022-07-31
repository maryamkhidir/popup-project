import { createStore } from 'vuex'
import { createPopup, fetchPopups } from './api'

export default createStore({
  state: {
    loading: false,
    template: {
      background: "#e07f66",
      title: "All the text and elements in this popup should be editable and dragable",
      placeholder: "E-mail",
      button_text: "Signup Now",
      footnote: "No credit card required. No Surprises",
      badgecolor: "#c7624e"
    },
    popup:{},
    popups:[]
  },
  getters: {
  },
  mutations: {
    createPopup (state, id) {
      state.popup = {...state.template, popup_id:id}
    },
    clearPopup (state, id) {
      state.popup = {}
    },
    setBackground(state, data){
      state.popup["background"] = data.color
      state.popup["badgecolor"] = data.badgecolor
    },
    setTitle(state, data){
      state.popup["title"] = data
    },
    setPlaceholder(state, data){
      state.popup["placeholder"] = data
    },
    setButtonText(state, data){
      state.popup["button_text"] = data
    },
    setFootnote(state, data){
      state.popup["footnote"] = data
    },
    savePopup(state, data){
      state.popups.push(data)
    }
  },
  actions: {
    savePopupAsync({commit, state}){
      state.loading = true
      const popup = state.popup
      commit('savePopup', popup)
      createPopup(popup)
      state.loading = false
    },
    async fetchPopupsAsync({commit, state}){
      state.loading = true
      const response = await fetchPopups()
      state.popups = response.data
      state.loading = false
    }
  },
  modules: {
  }
})
