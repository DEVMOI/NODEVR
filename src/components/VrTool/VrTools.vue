<template>
    <div class="vr-tools">
        <Toolbar></Toolbar>
        <a-scene>
            <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        </a-scene>
    </div>
</template>
<script>
    import Toolbar from '@/components/Toolbar/Toolbar'
    import aframe from "aframe";
    import "aframe-animation-component";
    import "aframe-animation-timeline-component";
    import "aframe-extras";
    import "aframe-particle-system-component";
    import "aframe-physics-system";
    import "@ekolabs/aframe-spritesheet-component";
    import "aframe-text-geometry-component";
    import "aframe-environment-component";

    export default {
        name: "vrtools",
        components: {
            Toolbar
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

    .vr-tools nav.toolbar .toolbar-item,
    .vr-tools nav.toolbar .toolbar-item .to-vr,
    .vr-tools nav.toolbar .toolbar-item .to-settings{
        border: none !important;
        color: #fff !important;
    }

    .vr-tools a-scene.fullscreen .a-canvas {
        top: 30px !important;
        height: 100%;
        background-color: #ccc;
    }
    .a-enter-vr-button{
        top: 10px;
    }
    .components{
        right: 0;
        text-align: right!important;
        display: flex;
        flex-wrap: wrap;
        flex-flow: column;
        justify-content: end;
    }
    .components input{
        text-align: right !important;
        display: flex;
        justify-content: end;
    }
</style>