<template>
  <div class="vr">
    <VrTools />
  </div>
</template>
<script>
import VrTools from "@/components/VrTool/VrTools.vue";
export default {
  name:"vr",
  components:{VrTools}
}
</script>
<style>
.vr{
  z-index: 2;
}
</style>

