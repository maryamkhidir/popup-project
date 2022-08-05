<template>
  <button @click="copy(); changeText();">{{btntext}}</button>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import useClipboard from 'vue-clipboard3'

export default defineComponent({
  name: "CopyButton",
  props: {
    text: String
  },
  data(){
    return{
      btntext: "COPY"
    }
  },
  setup(props) {
    const { toClipboard } = useClipboard()

    const copy = async () => {
      try {
        await toClipboard(props.text)
      } catch (e) {
        console.error(e)
      }
    }

    return { copy }
  },
  methods:{
    changeText(){
      this.btntext = "COPIED!"
    }
  }
})
</script>