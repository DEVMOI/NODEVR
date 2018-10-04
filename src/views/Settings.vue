<template> 
    <div class="Settings">
        <Toolbar/>
        <button class="go-back btn btn-dark"><router-link to="/">Go Back</router-link></button>
    </div>
</template>
<script>
    import Toolbar from '@/components/Toolbar/Toolbar';
    export default {
        name:'Settings',
        components:{
            Toolbar
        }
    }
</script>
<style scoped>
.go-back{
    position: absolute;
    bottom: 0;
    right: 0;
}
.go-back a{
    color: #fff;
    text-decoration: none;
}
</style>

