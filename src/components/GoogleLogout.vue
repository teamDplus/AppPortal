<template>
    <div>
        <button @click="signout" class="">サインアウト</button>
    </div>
</template>
<script setup>
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const signout = (e) => {
    e.preventDefault();
    signOut(auth).then((result) => {
    console.log(result)
    }).catch((error) => {
    console.error(error)
    });
}

</script>
<style>
    
</style>