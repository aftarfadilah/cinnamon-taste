<template>
  <div class="home">
    <Navigation></Navigation>
    <Header></Header>
    <section>
      <b-container>
        <b-row>
          <b-col>
            <h2>
              Hey, You're finally awake
            </h2>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'home',
  components: {
    Header,
    Navigation,
  },
};
</script>
