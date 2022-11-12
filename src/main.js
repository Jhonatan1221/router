import { createApp } from 'vue'

import {createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import HelloWord from '../src/components/HelloWorld'

//componentes
const Detail={templeate:'<h1>Hola mundo home</h1>'}

const routes=[
    {
        path:'/', component: HelloWord,
    },
    {
        path:'/detail', component:Detail,
    }
    
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
createApp(App).mount('#app')

app.mount('#app')
