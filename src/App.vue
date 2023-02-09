<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/common/Header.vue'

import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
          name: 'HomePage',
        }
  },
  components: {
    Header
  },
})
</script>



<template>
  <Header />
  <router-view />
</template>


<style>

</style>
