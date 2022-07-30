import { createStore } from 'vuex'

export default createStore({
  state: {
    template: {
      background: "#e07f66",
      title: "All the text and elements in this popup should be editable and dragable",
      placeholder: "E-mail",
      button_text: "Signup Now",
      footnote: "No credit card required. No Surprises",
      badgecolor: "#c7624e"
    },
    popup:{

    },
    popups:[]
  },
  getters: {
  },
  mutations: {
    createPopup (state, id) {
      state.popup = {...state.template, popup_id:id}
    },
    setBackground(state, data){
      const current_popup = state.popup
      current_popup["background"] = data.color
      current_popup["badgecolor"] = data.badgecolor
    },
    setTitle(state, data){
      const current_popup = state.popup
      current_popup["title"] = data
    },
    setPlaceholder(state, data){
      const current_popup = state.popup
      current_popup["placeholder"] = data
    },
    setButtonText(state, data){
      const current_popup = state.popup
      current_popup["button_text"] = data
    },
    setFootnote(state, data){
      const current_popup = state.popup
      current_popup["footnote"] = data
    }
  },
  actions: {
  },
  modules: {
  }
})
