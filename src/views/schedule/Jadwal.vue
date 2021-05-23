<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createjadwal">Add Jadwal MataKuliah</router-link>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Jadwal MataKuliah</th>
      <th scope="col">ID MataKuliah</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(schedules, index) in schedule" :key="index">
      <td>{{ schedules.jadwal }}</td>
      <td>{{ schedules.mk_id }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editjadwal', params:{id:data.id}}">Edit</router-link>
        <button @click.prevent="scheduleDelete(data.id)" class="btn btn-danger">Delete</button>
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
    let schedule = ref([])

    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/schedule')
      .then(response => {
        contract.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function contractDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/schedule/${id}`)
      .then(()=>{
        let z = this.schedule.map(schedule => schedule.id).indexOf(id);
        this.schedule.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      schedule,
      scheduleDelete
    }
  }
};
</script>
