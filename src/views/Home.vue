<template>
    <div class="home">
        <Home class="mt-2"/>
        <GitCommit class="mt-4"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Home from '@/components/Home.vue';
    import GitCommit from '@/components/GitCommits/GitCommit';

    export default {
        name: 'home',
        components: {
            Home,
            GitCommit
        },
    }
</script>
<style>
    .home{
        overflow: hidden;
    }
</style>
