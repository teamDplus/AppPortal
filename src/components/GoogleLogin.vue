<template>
    <div>
        <button @click="GoogleLogin" class="bg-red-500 text-white p-2 rounded-lg">Googleログイン</button>
    </div>
</template>
<script setup>
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

const GoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user)
      }).catch((error) => {
        console.error(error)
      });
}

</script>
<style>
    
</style>