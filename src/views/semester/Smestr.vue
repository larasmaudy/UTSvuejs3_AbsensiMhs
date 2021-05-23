<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createsemester">Add Semester</router-link>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Semester</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(schedules, index) in schedule" :key="index">
      <td>{{ schedules.jadwal }}</td>
      <td>{{ schedules.mk_id }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editsemester', params:{id:data.id}}">Edit</router-link>
        <button @click.prevent="semesterDelete(data.id)" class="btn btn-danger">Delete</button>
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
      axios.get('http://127.0.0.1:8000/api/semester')
      .then(response => {
        contract.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function contractDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/semester/${id}`)
      .then(()=>{
        let z = this.semester.map(semester => semester.id).indexOf(id);
        this.semester.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      semester,
      Delete
    }
  }
};
</script>
