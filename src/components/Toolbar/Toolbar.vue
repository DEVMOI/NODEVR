<template>
    <div>
        <nav class="toolbar px-0 navbar">
            <li class="toolbar-item no-list-style vr-info">
                VR Tools
            </li>
            <!--<li class="pl-1 toolbar-item no-list-style settings-info">-->
            <!--<router-link class="to-settings" to="/settings">-->
            <!--Settings-->
            <!--</router-link>-->
            <!--</li>-->
            <li class="toolbar-item no-list-style help-info">
                <Dropdown>
                    <template slot="btn">Help</template>
                    <template slot="body">
                        <ul class="d-flex flex-column pl-0 pr-3 m-0">
                            <li class="p-2 no-list-style fnt-11 fnt-black"><a href="https://aframe.io" target="_blank">Aframe
                                Documentation</a></li>
                            <li class="p-2 no-list-style fnt-11 fnt-black"><a href="https://vuejs.org" target="_blank">VueJS
                                Documentation</a></li>
                            <li class="p-2 no-list-style fnt-11 fnt-black"><a href="https://electronjs.org"
                                                                              target="_blank">Electron Documentation</a>
                            </li>
                            <li class="p-2 no-list-style fnt-11 fnt-black">
                                <router-link target="_blank" to="/about">
                                    About
                                </router-link>
                            </li>
                        </ul>
                    </template>
                </Dropdown>
            </li>
        </nav>
    </div>
</template>
<script>
    import Dropdown from '@/mixins/dropdown';

    export default {
        name: 'Toolbar',
        components: {
            Dropdown
        },
        methods: {
            saveFile(e) {
                console.log('file save');
            }
        }
    }
</script>
<style>
    nav.toolbar {
        height: 10px;
        background-color: #eee;
        justify-content: start;
    }

    .toolbar a:hover,
    .toolbar a {
        color: #000;
        text-decoration: none;
    }

    .toolbar-item {
        font-size: 10.5px;
        font-weight: 500;
        padding: .5rem .4rem;
        text-align: left;
    }

    .dropdown-toggle::after {
        display: none !important;
    }

</style>
