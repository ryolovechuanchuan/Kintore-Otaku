<script setup>
import ProjNavbar from '@/components/ProjNavbar.vue';
import ProjFooter from '@/components/ProjFooter.vue';
</script>

<template>
    <ProjNavbar />

    <main>
        <RouterView />
    </main>

    <ProjFooter />
</template>