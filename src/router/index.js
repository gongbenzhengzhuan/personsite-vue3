import {createRouter,createWebHistory} from "vue-router";
import About from "../views/AboutView.vue";
import Table from "../views/TableView.vue";
import Template from "../views/TemplateView.vue";
const routes=[
    {path:"/",name:"About",component:About},
    {path:"/table",name:"Table",component:Table},
    {path:"/template",name:"Template",component:Template},
];
const router=createRouter({
    history:createWebHistory(),
    routes

})
export default router;