<template>
  <div class="navigation">
    <transition name="fade">
      <div v-show="isActive" class="menu">
        <div class="overlay"></div>
        <transition-group name="list" tag="nav">
          <router-link key="home" to="/home" class="menu-item">
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
          color="#2c3e50"
          activeColor="#2c3e50"/>
      </div>
    </div>
  </div>
</template>

<style>
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
</style>

<script>
import { TastyBurgerButton } from 'vue-tasty-burgers';

export default {
  name: 'navigation',
  components: {
    TastyBurgerButton,
  },
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
