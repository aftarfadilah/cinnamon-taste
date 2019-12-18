<template>
  <div class="navigation" id="top">
    <transition
      name="fade"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
      <div v-show="isActive" class="main-navigation">
        <div class="overlay"></div>
        <transition-group
          tag="nav"
          name="fadeLeft"
          enter-active-class="animated fadeInLeft"
          leave-active-class="animated fadeOutLeft">
          <router-link key="home" to="/" class="menu-item">
            Home
          </router-link>
          <router-link key="about" to="/about" class="menu-item">
            About
          </router-link>
          <router-link key="technology" to="/technology" class="menu-item">
            Technology
          </router-link>
        </transition-group>
      </div>
    </transition>
    <div class="nav-header">
      <router-link to="/">
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
          :color="isBelowTheFold ? '#2c3e50' : '#fff'"
          :activeColor="isBelowTheFold ? '#2c3e50' : '#fff'"/>
      </div>
    </div>
  </div>
</template>

<style>
  .h-100vh {
    min-height: 100vh;
  }

  .bg-cover {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .navigation {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  .main-navigation {
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 9;
    opacity: 1;
  }
  .main-navigation .overlay {
    background-color: white;
  }
  .main-navigation nav {
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  .main-navigation nav a {
    color: #2c3e50;
    font-family: 'Comfortaa', Helvetica, Arial, sans-serif;
    font-size: 24pt;
    text-decoration: none;
    padding: 6px;
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

  .hamburger--spin .hamburger-inner {
    transition: background-color .25s;
  }
</style>

<script>
import { TastyBurgerButton } from 'vue-tasty-burgers'

export default {
  name: 'navigation',
  components: {
    TastyBurgerButton
  },
  data () {
    return {
      isActive: false,
      isBelowTheFold: false
    }
  },
  methods: {
    setIsActive (value) {
      this.isActive = value
    },
    handleScroll () {
      this.isBelowTheFold = window.scrollY > 500
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
