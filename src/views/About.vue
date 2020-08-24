<template>
  <div class="about">
    <Navigation></Navigation>
    <section class="above">
      <h1>There's nothing about me, yet.</h1>
    </section>
  </div>
</template>

<style>
  section.above {
    margin-top: 130px;
  }
</style>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'about',
  components: {
    Navigation
  }
}
</script>
