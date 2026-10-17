<script setup>
const props = defineProps({
  name: String,
  specialty: String,
  certifications: String,
  bio: String,
});
</script>

<template>
  <article class="card h-100">
    <div class="card-body">
      <h2 class="card-title h5">{{ name }}</h2>
      <p class="">專長：{{ specialty }}</p>
      <p class="">證照：{{ certifications }}</p>
      <p class="card-text">{{ bio }}</p>
    </div>
  </article>  
</template>

<style scoped></style>
