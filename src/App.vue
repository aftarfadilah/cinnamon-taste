<template>
  <div id="app">
    <router-view/>
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
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}

h1, h2, h3 {
  font-family: 'Comfortaa', Helvetica, Arial, sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

a:hover {
  text-decoration: inherit !important;
}

::-webkit-scrollbar {
  height: 10px;
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #efefef;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb {
  background: #d5d5d5;
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
