<template>
    <div class="home">
        <Toolbar/>
        <Home class="mt-2"/>
        <GitCommit class="mt-4"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Home from '@/components/Home.vue';
    import GitCommit from '@/components/GitCommits/GitCommit';
    import Toolbar from '@/components/Toolbar/Toolbar';
    export default {
        name: 'home',
        components: {
            Toolbar,
            Home,
            GitCommit
        },
    }
</script>
<style scoped>
    .home{
        overflow: hidden;
    }
</style>
