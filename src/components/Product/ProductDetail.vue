<template>
    <div>
        <h1>Product Details</h1>
        <p>Product ID: {{ route.params.product_id }}</p>
    </div>    
</template>

<script setup >
import { useRoute } from 'vue-router';

    const route = useRoute();
    console.log(route.params);
</script>