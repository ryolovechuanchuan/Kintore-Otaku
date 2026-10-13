<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="site">
    <header>
      <nav>
        <RouterLink to="/">首頁</RouterLink>
        <RouterLink to="/membership-plans">會籍方案</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <p>Kintore Otaku 會員網站</p>
    </footer>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
}

footer {
  margin-top: 48px;
}
</style>
