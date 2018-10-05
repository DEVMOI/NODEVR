<template>
    <div class="vr-tools">
        <a-scene>
            <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        </a-scene>
    </div>
</template>
<script>
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
        name: "vrtools"
    };
</script>
<style>
    .vr-tools a-scene.fullscreen .a-canvas {
        top: 30px !important;
        height: 100%;
        background-color: #ccc;
    }

    .a-enter-vr-button {
        top: 10px;
    }

    .components {
        right: 0;
        text-align: right !important;
        display: flex;
        flex-wrap: wrap;
        flex-flow: column;
        justify-content: end;
    }

    .components input {
        text-align: right !important;
        display: flex;
        justify-content: end;
    }
</style>