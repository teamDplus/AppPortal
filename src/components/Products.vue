<script setup lang="ts">
import { onMounted, ref } from "vue";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';

interface Product {
  id: string;
  category: string;
  createdAt: string; // or Date
  description: string;
  imageUrl: string;
  productId: string;
  productName: string;
  userId: string;
  votesCount: number;
}

const products = ref<Product[]>([]);

onMounted(() => {
  onSnapshot(collection(db, 'products'), (querySnapshot) => {
    const productsArray: Product[] = [];
    querySnapshot.forEach((doc) => {
      const product = doc.data() as Product;
      productsArray.push({
        id: doc.id,
        category: product.category,
        createdAt: product.createdAt,
        description: product.description,
        imageUrl: product.imageUrl,
        productId: product.productId,
        productName: product.productName,
        userId: product.userId,
        votesCount: product.votesCount,
      });
    });
    products.value = productsArray;
    console.log(products.value); // データをログに出力して確認
  });
});
</script>

<template>
  <div class="w-96 m-auto pt-16">
    <h1 class="mb-4">プロダクト一覧</h1>
    <div v-for="product in products" :key="product.id" class="flex justify-between bg-slate-200 w-full p-8 mb-6">
      <img src="@/assets/logo.svg" class="w-10" alt="">
      <div class="flex gap-4">
        <h3>{{ product.productName }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.category }}</p>
      </div>
      <p>{{ product.votesCount }}</p>
    </div>
  </div>
</template>