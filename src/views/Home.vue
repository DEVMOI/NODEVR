<template>
  <div class="home">
    <Home msg="BUILT WITH: AFRAME| VUE | ELECTRON"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'Settings',
  components: {
    Home
  }
}
</script>
