import Contact from "@/components/Home/Contact.vue";
import HomePage from "@/components/Home/HomePage.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import ProductList from "@/components/Product/ProductList.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path:"/", component: HomePage},
        {path:"/contact", component: Contact},
        {path: "/productList", component: ProductList},
        {path: "/product/:product_id", component: ProductDetail}
    ]
});

export default router;