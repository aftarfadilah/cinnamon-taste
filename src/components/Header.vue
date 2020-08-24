<template>
  <div class="vh-100 overflow-hidden">
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
        <img src="../assets/blob-shape.svg" class="blob" alt="Blobb">
        <b-col cols="12" sm="8" class="d-none d-sm-block">
          <img src="../assets/dev-activity.svg" alt="Developer Activity" class="illustration-1">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
  .hero {
    position: relative;
  }

  .hero .row {
    height: 100vh;
  }

  .hero .blob {
    position: absolute;
    top: -70%;
    right: -65%;
    width: 150%;
    z-index: 0;
    pointer-events: none;
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
    z-index: 1;
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
    color: #356ae6;
  }

  .vue-typer .custom.caret {
    background-color: #2c3e50;
    margin-left: 2px;
  }

  /* Dark mode configuration */
  .hero .blob {
    transition: .2s ease-in-out;
  }

  .dark .hero .blob {
    filter: saturate(.5);
  }
</style>

<script>
import { VueTyper } from 'vue-typer'
import 'vue-tasty-burgers/dist/vue-tasty-burgers.css'

export default {
  name: 'my-header',
  components: {
    VueTyper
  }
}
</script>
