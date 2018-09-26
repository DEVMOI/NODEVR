<template>
    <nav class="toolbar navbar justify-content-start px-0">
        <li class="nav-item no-list-style dropdown m-0 px-2">
            <a class="dropdown-toggle nav-link p-0 m-0" dropdown-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" id="navbarDropdown">File</a>
            <div class="dropdown-menu"  aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider" />
                <a class="dropdown-item" href="#">Separated link</a>
            </div>
        </li>
        <li class="nav-link nav-item px-2"><router-link to="/vr">VR</router-link></li>
        <li class="nav-link nav-item px-2"><router-link to="/settings">Settings</router-link></li>
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
.nav-item {
  font-size: 12px;
}
.no-list-style{
    list-style: none !important;
}
</style>
