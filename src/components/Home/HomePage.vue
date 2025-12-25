<template>
    <div>
        <h1>Home Page</h1>
        <button @click="goToContact()">Contact Page</button>
    </div>    
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function goToContact(){
    // router.push({name: 'contact'});
    router.push("/contact");
}
</script>