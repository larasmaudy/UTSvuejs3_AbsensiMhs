<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createkontrak">Add Kontrak MK</router-link>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID Mahasiswa</th>
      <th scope="col">iD Semester</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(contracts, index) in contract" :key="index">
      <td>{{ contracts.mhs_id }}</td>
      <td>{{ contracts.smstr_id }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editkontrak', params:{id:data.id}}">Edit</router-link>
        <button @click.prevent="contractDelete(data.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
// import Slider from "@/components/Slider.vue";
import { ref, onMounted } from 'vue';

export default {
  
  setup(){
    let matkul = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/contract')
      .then(response => {
        contract.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function contractDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/contract/${id}`)
      .then(()=>{
        let z = this.contract.map(contract => contract.id).indexOf(id);
        this.contract.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      contract,
      contractDelete
    }
  }
};
</script>
