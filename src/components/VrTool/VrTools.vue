<template>
    <div class="mt-5">
        <a-scene>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        <a-sky color="#ECECEC"></a-sky>
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
    name:"vrtools"
};
</script>
