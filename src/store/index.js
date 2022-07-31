import { findIndex } from 'lodash'
import { createStore } from 'vuex'
import { createPopup, fetchPopups } from './api'

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
    elOrder:[
      {name: "Badge",id: 0},
      {name: "Title",id: 1},
      {name: "Input",id: 2},
      {name: "Button",id: 3},
      {name: "Subtext",id: 4},
    ],
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
      const list = state.popups 
      list.push(data)
      state.popups = list
    },
    updatePopups(state, data){
      state.popups = data
    },
    updateElOrder(state, data){
      state.elOrder = data
    }
  },
  actions: {
    savePopupAsync({commit, state}){
      state.loading = true
      //Add element order to popup
      const popup = state.popup
      const elorder = JSON.stringify(state.elOrder)
      const upload = {...popup, el_order:elorder}
      
      //Updates
      commit('savePopup', upload)
      createPopup(upload)

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
