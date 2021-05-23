import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/student/Home.vue'
import Createmahasiswa from '../views/student/Createmahasiswa.vue'
import Editmahasiswa from '../views/student/Editmahasiswa.vue'
import Index from '../views/course/Index.vue'
import Creatematakuliah from '../views/course/Creatematakuliah.vue'
import Editmatakuliah from '../views/course/Editmatakuliah.vue'
import Absen from '../views/presence/Absen.vue'
import Createabsen from '../views/presence/Createabsen.vue'
import Editabsen from '../views/presence/Editabsen.vue'
import Kontrak from '../views/contract/Kontrak.vue'
import Createkontrak from '../views/contract/Createkontrak.vue'
import Editkontrak from '../views/contract/Editkontrak.vue'
import Jadwal from '../views/schedule/Jadwal.vue'
import Createjadwal from '../views/schedule/Createjadwal.vue'
import Editjadwal from '../views/schedule/Editjadwal.vue'
import Smestr from '../views/semester/Smestr.vue'
import Createsemester from '../views/semester/Createsemester.vue'
import Editsemester from '../views/semester/Editsemester.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createmahasiswa',
    name: 'Createmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createmahasiswa
  },
  {
    path: '/editmahasiswa',
    name: 'Editmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmahasiswa
  }, 
  {
    path: '/courses',
    name: 'Index',
    component: Index
  },
  {
    path: '/creatematakuliah',
    name: 'Creatematakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliah
  },
  {
  path: '/editmatakuliah',
  name: 'Editmatakuliah',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Editmatakuliah
},
{
  path: '/presence',
  name: 'Absen',
  component: Absen
},
{
  path: '/createabsen',
  name: 'Createabsen',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createabsen
},
{
path: '/editabsen',
name: 'Editabsen',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editabsen
},

{
  path: '/contract',
  name: 'Kontrak',
  component: Kontrak
},
{
  path: '/createkontrak',
  name: 'Createkontrak',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createkontrak
},
{
path: '/editkontrak',
name: 'Editkontrak',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editkontrak
},

{
  path: '/schedule',
  name: 'Jadwal',
  component: Jadwal
},
{
  path: '/createjadwal',
  name: 'Createjadwal',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createjadwal
},
{
path: '/editjadwal',
name: 'Editjadwal',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editjadwal
},

{
  path: '/semester',
  name: 'Smestr',
  component: Smestr
},
{
  path: '/createsemester',
  name: 'Createsemester',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createsemester
},
{
path: '/editsemester',
name: 'Editsemester',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editsemester
},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router