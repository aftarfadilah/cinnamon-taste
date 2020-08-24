<template>
  <div
    id="app"
    :class="[isDarkTheme ? 'dark' : 'light']"
  >
    <router-view/>
    <div id="switch" v-on:click="toggleDarkTheme">
      <DarkSwitch :isDarkTheme="isDarkTheme"></DarkSwitch>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}

h1, h2, h3 {
  font-family: 'Comfortaa', Helvetica, Arial, sans-serif;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-x: hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.light {
  color: #2c3e50;
  background-color: #efefef;
  transition: .25s ease-in-out;
}

.dark {
  background-color: #202945;
  color: #efefef;
  transition: .25s ease-in-out;
}

a:hover {
  text-decoration: inherit !important;
}

::-webkit-scrollbar {
  height: 10px;
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f2f2f2;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background: #E0E0E0;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #c4c4c4;
}

::-moz-selection {
  background-color: #aeaeae;
}

::selection {
  background-color: #aeaeae;
}

</style>

<script>
import DarkSwitch from '@/components/DarkSwitch.vue'

export default {
  name: 'app',
  components: {
    DarkSwitch
  },
  data () {
    return {
      isDarkTheme: false
    }
  },
  methods: {
    toggleDarkTheme () {
      this.isDarkTheme = !this.isDarkTheme
    }
  }
}
</script>
