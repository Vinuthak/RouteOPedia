<template>
    <div>
        <h1>Product Details</h1>
        <div v-if="route.params.product_id">
            <p>Product ID: {{ route.params.product_id }}</p>
        </div>
        <div v-else>
            <p>No product ID</p>
        </div>

        <br />

        <div v-if="route.params.category_id">
            <p>Category ID: {{ route.params.category_id }}</p>
        </div>
        <div v-else>
            <p>No category ID</p>
        </div>
    </div>    
</template>

<script setup >
import { useRoute } from 'vue-router';

    const route = useRoute();
    console.log(route.params);
</script>