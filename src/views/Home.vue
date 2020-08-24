<template>
  <div class="home" >
    <Navigation></Navigation>
    <Header></Header>
    <div id="content"></div>
    <section style="padding: 30px 0;">
      <b-container>
        <b-row>
          <b-col>
            <h2>
              Hey, You're finally awake.
            </h2>
            <div class="content">
              You were trying to cross the border, right?
              Walked right into that Imperial ambush, same as us, and that thief over there.
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Navigation,
    Footer
  }
}
</script>
