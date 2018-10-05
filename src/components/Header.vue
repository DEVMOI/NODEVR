<template>
    <div class="greetings container fnt-monospace">
        <h2 class="display-4">{{title}}</h2>
        <p>{{subtitle}}</p>
    </div>
</template>

<script>
    export default {
        name: 'HomeBase',
        props: {
            title: String,
            subtitle: String,
        }
    }
</script>
<style></style>
