<template>
    <div class="vr">
        <Toolbar/>
        <VrTools/>
    </div>
</template>
<script>
    import Toolbar from '@/components/Toolbar/Toolbar';
    import VrTools from "@/components/VrTool/VrTools.vue";

    export default {
        name: "vr",
        components: {
            Toolbar,
            VrTools
        },
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
<style>
    .vr nav.toolbar {
        background: #000;
        justify-content: center;
        height: 32px !important;
        overflow: none !important;
    }

    .vr nav.toolbar .toolbar-item,
    .vr nav.toolbar .toolbar-item .to-vr,
    .vr nav.toolbar .toolbar-item .to-settings {
        border: none !important;
        color: #fff !important;
    }
</style>
