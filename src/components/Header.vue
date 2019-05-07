<template>
  <div id="header">
    <transition name="fade">
      <div v-show="isActive" class="menu">
        <transition-group name="list" tag="nav">
          <router-link key="home" to="/Home" class="menu-item">
            Home
          </router-link>
          <router-link key="portfolio" to="/Portfolio" class="menu-item">
            Portfolio
          </router-link>
          <router-link key="technology" to="/Technology" class="menu-item">
            Technology
          </router-link>
        </transition-group>
      </div>
    </transition>
    <div class="nav-header">
      <router-link to="home">
        <div class="brand">
          <img src="../assets/brand-alt.png">
          <div class="tagline">
            Your<br>Little<br>Spaceship
          </div>
        </div>
      </router-link>
      <div class="burger">
        <tasty-burger-button
          :active="isActive"
          @toggle="setIsActive"
          type="spin"
          color="#2c3e50"
          activeColor="#2c3e50"/>
      </div>
    </div>
    <b-container class="hero">
      <b-row class="align-items-center">
        <b-col class="headline">
          <h1>
            Trust me, I'm a<br>
            <span>
              <vue-typer
              :text='["Programmer", "Web Developer", "UI/UX Expert"]'
              initial-action='typing'
              :pre-type-delay=500
              :erase-delay=50
              erase-style='backspace'
              ></vue-typer>
            </span>
          </h1>
        </b-col>
        <img src="../assets/dev-activity.svg" alt="Developer Activity" class="illustration-1">
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
  .menu nav {
    display: flex;
    flex-direction: column;
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

  .hero .illustration-1 {
    position: absolute;
    right: 15px;
    width: 60%;
    z-index: -1;
  }

  .hero .headline {
    text-align: left;
  }

  .nav-header {
    position: absolute;
    width: 100%;
    padding: 30px 10%;
    display: flex;
    justify-content: space-between;
    z-index: 10;
  }

  .nav-header a {
    text-decoration: none;
  }

  .nav-header .brand {
    display: flex;
    align-items: center;
    opacity: .75;
    transition: .2s;
  }

  .nav-header .tagline {
    color: #2c3e50;
    line-height: 1.2;
    padding: 5px 10px;
    text-align: left;
    font-family: 'Comfortaa', Helvetica, Arial, sans-serif;
  }

  .nav-header .brand:hover {
    opacity: 1;
  }

  .nav-header .brand img {
    height: 60px;
    width: auto;
  }

  .nav-header .burger {
    display: flex;
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
import { TastyBurgerButton } from 'vue-tasty-burgers';
import 'vue-tasty-burgers/dist/vue-tasty-burgers.css';

export default {
  name: 'Header',
  components: {
    VueTyper,
    TastyBurgerButton,
  },
  props: {},
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    setIsActive(value) {
      this.isActive = value;
    },
  },
};
</script>
