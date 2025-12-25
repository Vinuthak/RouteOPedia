import Login from "@/components/Authentication/Login.vue";
import Contact from "@/components/Home/Contact.vue";
import HomePage from "@/components/Home/HomePage.vue";
import NoAccess from "@/components/Layout/NoAccess.vue";
import NotFound from "@/components/Layout/NotFound.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import ProductList from "@/components/Product/ProductList.vue";
import { createRouter, createWebHistory } from "vue-router";

function isAdmin(){
    const isAdmin = false;
    if(isAdmin){
        return true;
    }

    return { name: "noAccess"};
}

function isAuthenticated(){
    const isAuthenticated = true;
    if(isAuthenticated){
        return true;
    }

    return false;
}


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path:"/", component: HomePage, name: "home"},
        {path: "/contact-us", redirect: { name: "contact"} },
        {path:"/contact", component: Contact, name: 'contact'},
        {
            path: "/productList",
            component: ProductList,
            name:'productList',
            beforeEnter: [isAdmin,isAuthenticated]
            },
        {path: "/product/:product_id/:category_id?", component: ProductDetail, name:'productDetails',props: true},
        // {path: "/product/:product_id", component: ProductDetail},sice we can also make it optional by using '?'
        {path: "/product", component: ProductDetail},
        {path: "/login", component: Login, name: 'login'},
        {path: "/no-access", component: NoAccess, name:"noAccess"},
        {path:"/:catchAll(.*)", component: NotFound}
        
    ],
    linkActiveClass: "active"
});

router.beforeEach((to, from) => {
    console.log("Global beforeEach");
    
    const isAuthenticated = true;
    if(to.name == 'home'){
        return true;
    }
    
    if(!isAuthenticated && to.name !== "login"){
        return { name: "login"};
    }
    return true;
})

export default router;