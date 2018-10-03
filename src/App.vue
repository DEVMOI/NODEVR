<template>
  <div id="app">
    <Toolbar />
    <div class="my-5 page-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar/Toolbar'

export default {
  name:'App',
  components: {
    Toolbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app .page-content{
  z-index: -1 !important;
}
</style>
