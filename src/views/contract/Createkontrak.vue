<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Add Kontrak</h5>
     <form class="row g-3" @submit.prevent="store">
  
   <div class="col-md-6">
    <label for="inputEmail4" class="form-label">ID Mahasiswa</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="contracts.mhs_id" />
      <div class="alert alert-danger" v-if="validation.mhs_id">
        {{ validation.mhs_id[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">ID Semester</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="contracts.smstr_id" />
      <div class="alert alert-danger" v-if="validation.smstr_id">
        {{ validation.smstr_id[0] }}
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

    const contract = reactive({
      mhs_id: '',
      smstr_id: '',
    })

    const validation = ref([])

    const router = useRouter()

    function store(){
      let mhs_id = contracts.mhs_id
      let smstr_id = contracts.smstr_id

      axios.post('http://127.0.0.1:8000/api/contract', {
        mhs_id: mhs_id,
        smstr_id: smstr_id,
        
      }).then(() => {
        router.push({
          name:'Index'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      contracts,
      validation,
      router, 
      store
    }
  },
}
</script>
