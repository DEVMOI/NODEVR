<template>
  <div class="greetings">
    <p class="lead">Welcome to the NODEVR</p>
    <p>A Desktop Client for Creating Vr Environments</p>
    <p class="fnt-monospace fnt-11">Built with 
      <a :href="aframeUrl" target="_blank">AFRAME</a> | 
      <a :href="vueUrl" target="_blank">VUE</a> | 
      <a :href="electronUrl" target="_blank">ELECTRON</a></p>
  </div>
</template>

<script>
export default {
  name: 'HomeBase',
  props: {
    msg: String
  },
  data () {
    return{
      aframeUrl: 'https://aframe.io',
      vueUrl: 'https://vuejs.org',
      electronUrl: 'https://electronjs.org',
    }
  }
}
</script>
<style></style>
