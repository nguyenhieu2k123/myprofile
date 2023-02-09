<template>
  <header class="p-8 flex">
    <div class="avatar">
        <img src="../../img/avatar.jpg" alt="">
    </div>
    <ul class="flex">
        <li> <router-link to="/" class='flex p-4'>Home</router-link></li>
        <li> <router-link to="/feature" class="flex p-4">Feature</router-link></li>
        <li> <router-link to="/portfolio" class="flex p-4">Portfolio</router-link></li>
        <li> <router-link to="/resume" class="flex p-4">Resume</router-link></li>
        <li> <router-link to="/client" class="flex p-4">Client</router-link></li>
        <li> <router-link to="/contact" class="flex p-4">Contact</router-link></li>
    </ul>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, ref } from 'vue'
import { computed } from 'vue';
import { useRouter,useRoute } from 'vue-router';
export default defineComponent({
     data() {
        return {
            name: 'Header',
        }
    },
})

</script>

<style>
header{
    background-color: var(--header-bg-color) ;
    backdrop-filter: blur(15px);
 }
 header ul li{
    color: white;
    text-transform: uppercase;
    font-size:13px ;
    letter-spacing: 1px;
 }
 .avatar{
    border: 2px solid gray;
    border-radius:50% ;
 }
 .avatar img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
 }
 
 .router-link-active{
    color: red;
 }
</style>