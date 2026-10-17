<script setup>
import CoachCard from "@/components/coaches/CoachCard.vue";

const coaches = [
  {
    id: 1,
    name: "林怡君",
    specialty: "肌力訓練、體態調整",
    certifications: "ACE 私人教練認證",
    bio: "擅長依照學員程度安排肌力與體態調整課程。",
  },
  {
    id: 2,
    name: "林怡君",
    specialty: "肌力訓練、體態調整",
    certifications: "ACE 私人教練認證",
    bio: "擅長依照學員程度安排肌力與體態調整課程。",
  },
  {
    id: 3,
    name: "林怡君",
    specialty: "肌力訓練、體態調整",
    certifications: "ACE 私人教練認證",
    bio: "擅長依照學員程度安排肌力與體態調整課程。",
  },
];
</script>

<template>
  <main class="container py-4">
    <h1 class="mb-4">教練介紹</h1>

    <div class="row g-4">
      <div
        v-for="coach in coaches"
        :key="coach.id"
        class="col-12 col-md-6 col-lg-4"
      >
        <CoachCard
          :name="coach.name"
          :specialty="coach.specialty"
          :certifications="coach.certifications"
          :bio="coach.bio"
        ></CoachCard>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
