<template>
  <div class="home">
    <Home msg="VUE | AFRAME | ELECTRON"/>
    <p> Welcome to the VR Builder </p>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'home',
  components: {
    Home
  }
}
</script>
