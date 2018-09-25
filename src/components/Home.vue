<template>
  <div class="greetings">
    <p class="lead">Welcome to the NODEVR</p>
    <p>A Desktop Client for Creating Vr Environments</p>
    <p class="fnt-monospace fnt-11">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeBase',
  props: {
    msg: String
  }
}
</script>
<style>
.fnt-monospace{
  font-family: monospace;
}
.fnt-11{
  font-size: 11px;
}
</style>
