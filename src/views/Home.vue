<template>
    <div class="home d-flex flex-column">
        <Toolbar/>
        <Header class="my-auto" title="NODE VR" subtitle="A Desktop Client for Creating VR Environments"/>
        <button class="btn btn-outline-success w-25 mx-auto mb-5 fnt-monospace mw-150px">
            <router-link class="fnt-black" to="vr">
                Get Started
            </router-link>
        </button>
        <p class="fnt-monospace fnt-11">Built with
            <a :href="aframeUrl" target="_blank">AFRAME</a> |
            <a :href="vueUrl" target="_blank">VUE</a> |
            <a :href="electronUrl" target="_blank">ELECTRON</a></p>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue';
    import Toolbar from '@/components/Toolbar/Toolbar';

    export default {
        name: 'home',
        components: {
            Toolbar,
            Header
        },
        data() {
            return {
                aframeUrl: 'https://aframe.io',
                vueUrl: 'https://vuejs.org',
                electronUrl: 'https://electronjs.org',
            }
        }
    }
</script>
<style scoped>
    .home {
        cursor: default;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        background-color: #eee;
        overflow: hidden;
        height: 100%;
    }

</style>
