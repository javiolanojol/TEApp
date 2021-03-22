import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Authors from '../views/Authors.vue'
import ChooseBlock from '../views/ChooseBlock.vue'
import NewBlock from '../views/NewBlock.vue'
import NewStory from '../views/NewStory.vue'
import ReadStory from '../views/ReadStory.vue'
import SignUp from '../views/SignUp.vue'
import Stories from '../views/Stories.vue'
import SuperUser from '../views/SuperUser.vue'
import UserProfile from '../views/UserProfile.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/autores',
    name: 'Authors',
    component: Authors
  },
  {
    path: '/moderar',
    name: 'ChooseBlock',
    component: ChooseBlock
  },
  {
    path: '/nuevo-fragmento',
    name: 'NewBlock',
    component: NewBlock
  },
  {
    path: '/nueva-historia',
    name: 'NewStory',
    component: NewStory
  },
  {
    path: '/lectura',
    name: 'ReadStory',
    component: ReadStory
  },
  {
    path: '/registro',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/libros',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/admin',
    name: 'SuperUser',
    component: SuperUser
  },
  {
    path: '/perfil',
    name: 'UserProfile',
    component: UserProfile
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
