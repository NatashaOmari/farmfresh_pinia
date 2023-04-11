<template >
    <div>
        <h1>These are the Crops</h1>
        <CropCardComponent v-for="crop in cropsStore.crops" :key="crop.id" :crop="crop">

        </CropCardComponent>
    </div>
</template>
<script>
import CropCardComponent from '../components/CropCardComponent.vue';
import {useCropsStore} from '../stores/CropsStore';
export default {
    components: {CropCardComponent},
    setup () {
        let cropsStore=useCropsStore();
        return {cropsStore};
        
    },
}
</script>
<style>
    
</style>