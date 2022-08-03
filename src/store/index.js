import { createStore } from 'vuex'
import { addPopup, fetchPopups } from './api'

export default createStore({
  state: {
    loading: false,
    template: {
      background: "#e95e5b",
      title: "All the text and elements in this popup should be editable and dragable",
      placeholder: "E-mail",
      button_text: "Signup Now",
      footnote: "No credit card required. No Surprises",
      badgecolor: "#c43433"
    },
    popup:{},
    popups:[],
    positions:{
      title: {
          name: "title",
          left: "60px",
          top: "90px",
      },
      badge: {
          name: "badge",
          left: "162px",
          top: "20px"
      },
      input: {
        name: "input",
        left: "60px",
        top: "200px"
      },
      button: {
          name: "button",
          left: "60px",
          top: "277px"
      },
      subtext: {
          name: "subtext",
          left: "72px",
          top: "352px"
      }
  }
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
      const list = state.popups 
      list.push(data)
      state.popups = list
    },
    updatePopups(state, data){
      state.popups = data
    },
    savePositions(state, data){
      state.positions[data[0]] = data[1]
    }
  },
  actions: {
    savePopupAsync({commit, state}){
      state.loading = true
      //Add element order to popup
      const popup = state.popup
      const positions = JSON.stringify(state.positions)
      const upload = {...popup, el_order:positions}
      //Updates
      addPopup(upload)

      state.loading = false
    },
    async fetchPopupsAsync({commit, state}){
      state.loading = true
      const response = await fetchPopups()
      commit('updatePopups', response.data)
      state.loading = false
    }
  },
  modules: {
  }
})
