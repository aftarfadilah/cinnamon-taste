<template>
  <div class="hero">
    <div class="header">
      <router-link to="home">
        <div class="brand">
          <img src="../assets/brand.png">
          <div class="tagline">
            Your<br>Little<br>Spaceship
          </div>
        </div>
      </router-link>
      <nav class="nav-hero">
        <tasty-burger-button
          type="spin"
          color="#fff"
          activeColor="#fff"/>
      </nav>
    </div>
    <carousel autoplay="true" :per-page="1" :paginationEnabled="false">
      <slide class="bg-cover slide-item" style="background-image: url(https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&q=80);"></slide>
      <slide class="bg-cover slide-item" style="background-image: url(https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&q=80);"></slide>
      <slide class="bg-cover slide-item" style="background-image: url(https://images.unsplash.com/photo-1556390234-0ff1fed64233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&q=80);"></slide>
    </carousel>
    <div class="overlay"></div>
    <div class="headline">
      <h1>
        I Build <span>
          <vue-typer
          :text='["Website", "Android App", "Trust"]'
          initial-action='typing'
          pre-type-delay='500'
          erase-delay='50'
          erase-style='backspace'
          ></vue-typer>
        </span>
      </h1>
    </div>
  </div>
</template>

<style>
  .bg-cover {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .slide-item {
    height:100vh;
  }

  .hero {
    position: relative;
  }

  .hero .header {
    position: absolute;
    width: 100%;
    padding: 30px 10%;
    display: flex;
    justify-content: space-between;
    z-index: 10;
  }

  .hero .header a {
    text-decoration: none;
  }

  .hero .header .brand {
    display: flex;
    align-items: center;
    opacity: .75;
    transition: .2s;
  }

  .hero .header .tagline {
    color: white;
    padding: 5px 10px;
    text-align: left;
    font-family: 'Comfortaa', Helvetica, Arial, sans-serif;
  }

  .hero .header .brand:hover {
    opacity: 1;
  }

  .hero .header .brand img {
    height: 60px;
    width: auto;
  }

  .nav-hero {
    display: inline-flex;
    align-items: center;
    color: white;
    opacity: .75;
    transition: .2s;
  }

  .nav-hero ul {
    display: flex;
    list-style: none;
  }

  .nav-hero li {
    padding: 6px 10px;
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #08556f;
    opacity: .75;
    pointer-events: none;
  }

  .hero .headline {
    position: absolute;
    bottom: 5vh;
    left: 10%;
    max-width: 100vw;
    color: white;
  }

  .vue-typer .custom.char {
    color: white;
  }

  .vue-typer .custom.caret {
    background-color: white;
    margin-left: 2px;
  }
</style>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { VueTyper } from 'vue-typer';
import { TastyBurgerButton } from 'vue-tasty-burgers';
import 'vue-tasty-burgers/dist/vue-tasty-burgers.css';

export default {
  name: 'Header',
  components: {
    Carousel,
    Slide,
    VueTyper,
    TastyBurgerButton,
  },
  props: {
    slides: [
      {
        id: 1,
        url: 'url(https://images.unsplash.com/photo-1556390234-0ff1fed64233?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)',
      },
      {
        id: 2,
        url: 'url(https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80)',
      },
      {
        id: 3,
        url: 'url(https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)',
      },
    ],
  },
};
</script>
