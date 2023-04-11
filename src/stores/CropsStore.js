import {defineStore} from 'pinia'
export const useCropsStore = defineStore('crops',{
    state: () => {
        return {
            crops: [
                {id: 1, name: 'carrot', number: 12},
                {id: 2, name: 'apple', number: 13},
                {id: 3, name: 'tomato', number: 16},
                {id: 4, name: 'spinach', number: 8},
                {id: 5, name: 'maize', number: 5},
                {id: 6, name: 'beans', number: 23},
                {id: 7, name: 'peas', number: 16},
                {id: 8, name: 'mango', number: 9},
                {id: 9, name: 'orange', number: 7},
                {id: 10, name: 'rice', number: 5},
            ],
            
            demo:"this is a demo"
            
        };
    },
    getters: {
        
    },
    actions: {
        deleteCrop (id) {
            this.crops=this.crops.filter(crop=>crop.id!==id);
            console.log('crop deleted');
        }
    }
});