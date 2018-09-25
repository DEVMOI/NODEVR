  <template>
  <div class="vr">
    <VrTools />
    <button @hotkey="keymap"></button>
  </div> 
</template>
<script>
import VueHotKey from "v-hotkey";
import VrTools from "@/components/VrTool/VrTools.vue";
export default {
  name: "vr",
  components: { VrTools },
  methods: {
    goBack() {
      console("wo");
      this.$router.push({ path: "/" });
    }
  },
  computed: {
    keymap() {
      return {
        // bind to hotkey
        "ctrl+alt+b": this.goBack
      };
    }
  } 
};
</script>
<style>
.vr {
  z-index: 2;
}
</style>

