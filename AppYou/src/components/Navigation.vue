<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- <div>
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/applications">Приложения</RouterLink>
    <RouterLink to="/TGbots">TG-боты</RouterLink>
    <RouterLink to="/more">Ещё</RouterLink>
  </div> -->
  <div class="container fixed-bottom navbar_bottom1" id="bottom_navbar" style="background: rgba(250,250,250,0.95);min-height: 58px;height: 59px;border-top: 1px solid #E1E1E1;">
        <div class="row">
            <div class="col ripple">
                <RouterLink to="/">
                    <p class="navbar_bottom1_pic" style="margin-bottom: 0px;text-align: center;"><i class="la la-home"></i></p>
                    <p class="navbar_bottom1_title" style="text-align: center;">Главная</p>
                </RouterLink>
            </div>
            <div class="col ripple">
                <p class="navbar_bottom1_pic" style="margin-bottom: 0px;text-align: center;">
                    <svg class="bi bi-boxes" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"></path>
                    </svg>
                </p>
                <p class="navbar_bottom1_title" style="text-align: center;">Приложения</p>
            </div>
            <div class="col ripple">
                <p class="navbar_bottom1_pic" style="margin-bottom: 0px;text-align: center;"><i class="icon-paper-plane"></i></p>
                <p class="navbar_bottom1_title" style="text-align: center;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">TG боты</p>
            </div>
            <div class="col ripple">
                <RouterLink to="/more">
                    <p class="navbar_bottom1_pic" style="margin-bottom: 0px;text-align: center;"><i class="icon ion-ios-settings"></i></p>
                    <p class="navbar_bottom1_title" style="text-align: center;">Ещё</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>