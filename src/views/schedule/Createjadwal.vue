<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Jadwal</h5>
     <form class="row g-3" @submit.prevent="store">
  
   <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Jadwak MK</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="schedules.jadwal" />
      <div class="alert alert-danger" v-if="validation.jadwal">
        {{ validation.jadwal[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">ID MataKuliah</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="schedules.mk_id" />
      <div class="alert alert-danger" v-if="validation.nama_mk">
        {{ validation.mk_id[0] }}
      </div>

  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const schedule = reactive({
      jadwal: '',
      mk_id: '',
    })

    const validation = ref([])

    const router = useRouter()

    function store(){
      let jadwal = schedules.jadwal
      let mk_id = schedules.mk_id

      axios.post('http://127.0.0.1:8000/api/schedule', {
        jadwal: jadwal,
        mk_id: mk_id,
        
      }).then(() => {
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
      store
    }
  },
}
</script>
