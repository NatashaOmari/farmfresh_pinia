
<script>
import { RouterLink, RouterView } from 'vue-router';
import {useCropsStore} from './stores/CropsStore';
export default {
  setup () {
        let cropsStore=useCropsStore();
        return {cropsStore};
        
    },
}
</script>
<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/crops">Crop</RouterLink> 
        
      </nav>

  <RouterView />
  </div>
  
</template>
<style>

</style>


