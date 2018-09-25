<template>
  <div v-hotkey="keymap" class="vr">
    <VrTools />
  </div>
</template>
<script>
import VrTools from "@/components/VrTool/VrTools.vue";
export default {
  name: "vr",
  components: { VrTools },
  computed: {
    keymap() {
      return {
        // bind to hotkey
        "alt + b": {
          keydown: this.goBack
        }
      };
    }
  },
  methods: {
    goBack() {
      this.$router.push({ path: '/  ' })
    }
  }
};
</script>
<style>
.vr {
  z-index: 2;
}
</style>

