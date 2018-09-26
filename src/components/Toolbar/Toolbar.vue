<template>
    <nav class="toolbar px-0">
        <div class="navbar justify-content-start">
        <li class="nav-item nav-link pl-0 file-info">
            File
        </li>
        <li class="nav-link nav-item ml-1"><router-link to="/">Edit</router-link></li>
        <li class="nav-link nav-item "><router-link to="/vr">VR</router-link></li>
        <li class="nav-link nav-item "><router-link to="/settings">Settings</router-link></li>
        <li>Help</li>
        </div>
    </nav> 
</template>
<style>
.toolbar .navbar{
  height: 10px;
  background-color: #eee;
}
.toolbar a:hover,
.toolbar a {
  color: #000;
  text-decoration: none;
}
.nav-item {
  font-size: 10.50px;
  font-weight: 500
}
.file-info{
    position: absolute;
    left: 7px;
}

.no-list-style{
    list-style: none !important;
}
.dropdown-toggle::after{
    display: none !important;
}
</style>
