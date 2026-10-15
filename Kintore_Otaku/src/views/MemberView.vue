<script setup>
import { ref, computed } from "vue";
import ProjBtn from '@/components/ProjBtn.vue';

</script>
<template>
  <section>
    <h1>MemberView</h1>
    <p>會員中心</p>
  </section>

  <hr>
  ProjBtnTest
  <!-- Btn Test -->
  <ProjBtn type="booking"></ProjBtn>
  <ProjBtn type="search"></ProjBtn>
  <ProjBtn type="add"></ProjBtn>
  <ProjBtn type=""></ProjBtn>

</template>

<style scoped></style>
