<template>
    <nav class="toolbar px-0 navbar justify-content-start">
        <li class="pl-1 toolbar-item no-list-style file-info">
            File
        </li>
        <li class="toolbar-item no-list-style  edit-info">
            <router-link to="/">
            Edit
            </router-link>
        </li>
        <li class="toolbar-item no-list-style vr-info">
            <router-link to="/vr">
            VR
            </router-link>
        </li>
        <li class="toolbar-item no-list-style settings-info">
            <router-link to="/settings">
            Settings
            </router-link>
        </li>
        <li class="toolbar-item no-list-style help-info">
            Help
        </li>
    </nav> 
</template>
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
/* .file-info{
    position: absolute;
    left: 7px;
}
.edit-info{
    position: absolute;
    left: 15px;
}
.vr-info{
    position: absolute;
    left: 53px;
}
.settings-info{
    position: absolute;
    left: 92px;
}
.help-info{
    position: absolute;
    left: 147px;
} */

.no-list-style {
  list-style: none !important;
}
</style>
