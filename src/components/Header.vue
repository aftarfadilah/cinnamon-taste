<template>
  <div id="header">
    <b-container class="hero">
      <b-row class="align-items-center">
        <b-col cols="12" sm="4" class="headline">
          <h1>
            Trust me, I'm a<br>
            <span>
              <vue-typer
              :text='["Programmer", "Web Developer", "Full Stack Dev"]'
              initial-action='typing'
              :pre-type-delay=500
              :erase-delay=50
              erase-style='backspace'
              ></vue-typer>
            </span>
          </h1>
        </b-col>
        <b-col cols="12" sm="8" class="d-none d-sm-block">
          <img src="../assets/dev-activity.svg" alt="Developer Activity" class="illustration-1">
        </b-col>
      </b-row>
    </b-container>
    <div class="arrow-scroll">
      <div class="body"></div>
      <div class="point point--down"></div>
    </div>
  </div>
</template>

<style>
  #header {
    min-height: 100vh;
  }

  .bg-cover {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 9;
    opacity: 1;
  }
  .menu .overlay {
    background-color: white;
  }
  .menu nav {
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  .menu nav a {
    color: #2c3e50;
    font-family: 'Comfortaa', Helvetica, Arial, sans-serif;
    font-size: 24pt;
    text-decoration: none;
    padding: 6px;
  }

  .hero {
    position: relative;
  }

  .hero .row {
    height: 100vh;
  }

  @media (max-width: 576px) {
    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
    }

    .hero .row {
      height: 50vh;
    }

  }

  .hero .illustration-1 {
    width: 90%;
    z-index: -1;
  }

  .hero .headline {
    text-align: left;
  }

  .nav-hero {
    display: inline-flex;
    align-items: center;
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

  .vue-typer .custom.char {
    color: #2c3e50;
  }

  .vue-typer .custom.caret {
    background-color: #2c3e50;
    margin-left: 2px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .arrow-scroll {
    position: absolute;
    left: 5%;
    bottom: 5vh;
    padding: 5px 20px;
    cursor: pointer;
  }

  .arrow-scroll .body {
    height: 55px;
    width: 3.5px;
    background-color: #2c3e50;
    border-radius: 100px;
  }

  .arrow-scroll .point {
    position: absolute;
    bottom: 5px;
    height: 3.5px;
    width: 15px;
    background-color: #2c3e50;
    border-radius: 100px;
    opacity: 0;
    transition: .5s ease;
  }

  .arrow-scroll .point--down {
    opacity: 1;
    bottom: 10px;
    transform: rotate(-45deg);
  }

  .arrow-scroll .point--up {
    opacity: 1;
    bottom: initial;
    top: 10px;
    transform: rotate(45deg);
  }

</style>

<script>
// import { Carousel, Slide } from 'vue-carousel';
import { VueTyper } from 'vue-typer';
import 'vue-tasty-burgers/dist/vue-tasty-burgers.css';

export default {
  name: 'header',
  components: {
    VueTyper,
  },
};
</script>
