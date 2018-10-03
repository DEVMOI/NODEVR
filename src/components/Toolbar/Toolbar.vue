<template>
    <div>
        <nav class="toolbar px-0 navbar justify-content-start">
            <li class="pl-1 toolbar-item no-list-style file-info">
                <Dropdown>
                    <template slot="btn">File</template>
                    <template slot="body">
                        <ul class="d-flex flex-row pl-0 pr-3 m-0">
                            <li class="btn no-list-style fnt-11" :click="newFile">New</li>
                            <li class="btn no-list-style fnt-11" :click="openFile">Open</li>
                            <li class="btn no-list-style fnt-11" :click="saveFile">Save</li>
                            <li class="btn toolbar-item no-list-style fnt-11">
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
                        <ul class="d-flex flex-row pl-0 pr-3 m-0">
                            <li class="btn no-list-style fnt-11" :click="saveFile">Undo</li>
                        </ul>
                    </template>
                </Dropdown>
            </li>
            <li class="toolbar-item no-list-style vr-info">
                <router-link to="/vr">
                    VR
                </router-link>
            </li>
            <li class="toolbar-item no-list-style help-info">
                <Dropdown>
                    <template slot="btn">Help</template>
                    <template slot="body">
                        <ul class="d-flex flex-row pl-0 pr-3 m-0">
                            <li class="btn no-list-style fnt-11">Aframe Documentation</li>
                            <li class="btn no-list-style fnt-11">VueJS Documentation</li>
                            <li class="btn no-list-style fnt-11">Electron Documentation</li>
                            <li class="btn toolbar-item no-list-style fnt-11">
                                <router-link to="/settings">
                                    Settings
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
    .toolbar {
        height: 10px;
        background-color: #eee;
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
