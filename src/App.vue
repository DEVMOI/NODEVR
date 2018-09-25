<template>
  <div id="app">
    <nav class="toolbar navbar navbar-dark bg-dark">
      <li class="nav-link nav-item"><router-link to="/settings">Settings</router-link></li>
      <li class="nav-link nav-item"><router-link to="/vr">VR</router-link></li>
    </nav>  
    <div class="my-5">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.toolbar{
  max-height:25px;
  
}
.toolbar a:hover,
.toolbar a{
  color: #fff;
  text-decoration: none;
}
</style>
