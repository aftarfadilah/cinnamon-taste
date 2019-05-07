<template>
  <div class="menu">
    <transition-group name="list" tag="nav">
      <router-link v-for="item in menu.items" :key="item.to" :to="item.to" class="menu-item">
        {{ item.text }}
      </router-link>
    </transition-group>
  </div>
</template>

<style>
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
    color: white;
    font-family: 'Comfortaa', Helvetica, Arial, sans-serif;
    font-size: 24pt;
    text-decoration: none;
    padding: 6px;
  }
</style>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menu: {
        header: '',
        items: [
          {
            to: '/Home',
            text: 'Home',
          },
          {
            to: '/Portfolio',
            text: 'Portfolio',
          },
          {
            to: '/Technology',
            text: 'Technology',
          },
        ],
      },
    };
  },
};
</script>
