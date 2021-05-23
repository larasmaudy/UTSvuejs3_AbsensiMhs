
<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Jadwal MK</h5>
     <form class="row g-3" @submit.prevent="update">
  
   <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Jadwal</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="schedules.kode" />
      <div class="alert alert-danger" v-if="validation.kode">
        {{ validation.jadwal[0] }}
      </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">ID MataKuliah</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="schedules.mk_id" />
      <div class="alert alert-danger" v-if="validation.nama_mk">
        {{ validation.mk_id[0] }}
      </div>
 
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const schedules = reactive({
      jadwal: '',
      mk_id: ''
    })

    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/schedule/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.jadwal)

        schedules.jadwal = response.data.data.jadwal
        schedules.mk_id = response.data.data.mk_id
      }).catch(error =>{
        console.log(error.response.data)
      })
    })

    function update(){
      let jadwal = schedules.jadwal
      let mk_id = schedules.mk_id

      axios.put(`http://127.0.0.1:8000/api/schedule/${route.params.id}`, {
        jadwal: jadwal,
        mk_id: mk_id,
      })

      .then(() => {
        router.push({
          name:'Index'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      schedules,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>
