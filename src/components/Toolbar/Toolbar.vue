<template>
    <div>
        <nav class="toolbar px-0 navbar">
            <li class="pl-1 toolbar-item no-list-style file-info">
                <Dropdown>
                    <template slot="btn">File</template>
                    <template slot="body">
                        <ul class="pl-0 pr-3 m-0 mw-80px justify-content-start">
                            <li class="btn no-list-style w-100 fnt-11 fnt-black" >New</li>
                            <li class="btn no-list-style w-100 fnt-11 fnt-black" >Open</li>
                            <li class="btn no-list-style w-100 fnt-11 fnt-black" :click="saveFile">Save</li>
                            <li class="btn w-100 no-list-style fnt-11 fnt-black">
                                <router-link to="/settings">
                                    Settings
                                </router-link>
                            </li>
                        </ul>
                    </template>
                </Dropdown>
            </li>
            <li class="toolbar-item no-list-style  edit-info">
                <Dropdown>
                    <template slot="btn">Edit</template>
                    <template slot="body">
                        <ul class="d-flex flex-column pl-0 pr-3 m-0">
                            <li class="btn no-list-style fnt-11 fnt-black" :click="saveFile">Undo</li>
                        </ul>
                    </template>
                </Dropdown>
            </li>
            <li class="toolbar-item no-list-style vr-info">
                <router-link class="to-vr" to="/vr">
                    VR
                </router-link>
            </li>
            <li class="toolbar-item no-list-style help-info">
                <Dropdown>
                    <template slot="btn">Help</template>
                    <template slot="body">
                        <ul class="pl-0 pr-3 m-0">
                            <li class="btn no-list-style fnt-11 fnt-black">Aframe Documentation</li>
                            <li class="btn no-list-style fnt-11 fnt-black">VueJS Documentation</li>
                            <li class="btn no-list-style fnt-11 fnt-black">Electron Documentation</li>
                        </ul>
                    </template>
                </Dropdown>
            </li>
        </nav>
    </div>
</template>
<script>
    import Dropdown from '@/mixins/dropdown';
    const electron = require("electron"),
        app = electron.app,
        BrowserWindow = electron.BrowserWindow;
    export default {
        name: 'Toolbar',
        components: {
            Dropdown
        },
        methods: {
            saveFile(e){
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
    }

    .dropdown-toggle::after {
        display: none !important;
    }

</style>
