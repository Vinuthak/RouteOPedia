<template>
    <div>
        <h1>Product List</h1>
        <p>Here is the list of products: </p>
        <div v-for="product in products" >
           <router-link :to="{name:'productDetails', params:{ product_id: product.id, category_id: 10}}">{{product.name  }}</router-link>
        </div>
        <button @click="$router.go(-1)">Back</button>
    </div>    
</template>

<script setup>
    // We need a LIST of 3 PRODUCT data
    //  assign them to products const
    //  PRODUCT data are id: <integer> , name: <string>

    const products = [
        {name: 'product 1', id:1},
        {name: 'product 2', id:2},
        {name: 'product 3', id:3}
    ];



    // const products = {
    //      [
    //                     {name: 'Product1', id: 1} ,
    //                     {name: 'Product2', id: 2} ,
    //                 ]
    // }

    // const egProducts = [
    //     ["Product1", 1], // { productName: "Product1", productId: 1}
    //     ["Product2", 2]
    // ]
</script>