<template>
    <div>
        <div class="container-fluid py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="card text-center p-5" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"> Name: {{ crop.name }}</h5>
    <p class="card-text"> Number: {{ crop.number }}</p>
    <a href="#" class="btn btn-danger" @click="deleteCrop">Delete</a>
    <a href="#" class="btn btn-primary">Update</a>
  </div>
</div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import {useCropsStore} from '../stores/CropsStore';
export default {
   setup () {
       let cropsStore=useCropsStore();
        return {cropsStore};
        
    },
    props:["crop"],
    methods: {
        deleteCrop() {
            let id=this.crop.id;
            this.cropsStore.deleteCrop(id);
           // this.$router.replace('/')
        },
        updateCrop() {
            
        }
    }
};
</script>
<style>
    .card {
    background-color: rgb(208, 247, 234);
    color: black;
    box-shadow: 0 0 45px #EDEDED;
    transition: .5s;
}
.card:hover {
    color: var(--light);
    background: var(--primary) !important;
}

</style>