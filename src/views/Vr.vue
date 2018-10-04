<template>
    <div class="vr">
        <VrTools/>
    </div>
</template>
<script>
    import VrTools from "@/components/VrTool/VrTools.vue";

    export default {
        name: "vr",
        components: {VrTools},
        methods: {
            goBack() {
                console("wo");
                this.$router.push({path: "/"});
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

