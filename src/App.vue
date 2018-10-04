<template>
    <div id="app">
        <div class="page-content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        overflow-y: hidden;
        height: 100%;
    }

    #app .page-content{
        z-index: -1 !important;
        overflow-y: scroll;
        height: 100%;
    }
</style>
