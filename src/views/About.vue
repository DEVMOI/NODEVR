<template>
    <div class="home d-flex flex-column">
        <GitCommit class="mt-4"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import GitCommit from '@/components/GitCommits/GitCommit';

    export default {
        name: 'Abotu',
        components: {
            GitCommit
        },
    }
</script>
<style scoped>
    .home{
        background-color:#eee;
        overflow: hidden;
        height:100%;
    }
</style>
