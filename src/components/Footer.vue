<template>
  <footer>
    <div class="arrow-scroll">
      <a href="#" v-scroll-to="isScrolled ? '#top' : '#content'">
        <div class="body"></div>
        <div :class="[isScrolled ? 'point--up' : 'point--down' ]" class="point"></div>
      </a>
    </div>
    <b-container class="footer">
      <b-row>
        <b-col cols="12" md="6" class="copyright">
          <transition
            name="fadeLeft"
            enter-active-class="animated fadeInLeft"
            leave-active-class="animated fadeOutLeft">
            <p v-show="!isScrolled">
              &copy; 2019 Aftar Fadilah. All Right Reserved.
            </p>
            Footer
          </transition>
        </b-col>
        <b-col cols="12" md="6" class="footer-navigation">
          <transition
           name="fadeRight"
           enter-active-class="animated fadeInRight"
           leave-active-class="animated fadeOutRight">
            <nav v-show="!isScrolled">
              <a href="https://github.com/aftarfadilah/">
                <v-icon name="brands/github" title="GitHub"></v-icon>
              </a>
              <a href="https://twitter.com/aftarfadilah/">
                <v-icon name="brands/twitter" title="Twitter"></v-icon>
              </a>
              <a href="https://www.linkedin.com/in/aftar-fadilah-a802b3171/">
                <v-icon name="brands/linkedin" title="LinkedIn"></v-icon>
              </a>
            </nav>
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<style>
/* Arrow */
.arrow-scroll {
  position: fixed;
  left: 5%;
  bottom: 5vh;
  z-index: 12;
}

.arrow-scroll a {
  position: relative;
  display: block;
  padding: 25px;
}

.arrow-scroll .body {
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 3px;
  border-radius: 100px;
}

.arrow-scroll .point {
  position: absolute;
  bottom: 0;
  height: 3px;
  width: 15px;
  border-radius: 100px;
  opacity: 0;
  transition: 1s ease;
}

.arrow-scroll .point--down {
  opacity: 1;
  bottom: 5px;
  transform: rotate(-45deg);
}

.arrow-scroll .point--up {
  opacity: 1;
  bottom: calc(100% - 8px);
  transform: rotate(45deg);
}

/* Footer - No shit sherlock */
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  padding: 30px 0;
}

.footer {
  opacity: .75;
  transition: .2s ease;
}

.footer:hover {
  opacity: 1;
}

.footer p {
  margin-bottom: 0;
}

.footer-navigation a {
  position: relative;
  padding: 4px 8px;
  color: #2c3e50;
}

@media (min-width: 576px) {
  .footer-navigation {
    text-align: right;
  }
}

@media (max-width: 575px) {
  .arrow-scroll {
    left: -2%;
  }
  .arrow-scroll .body {
    width: 2px;
  }
  .arrow-scroll .point {
    height: 2px;
    margin-left: -1px;
  }
}

/* Dark mode configs */

.arrow-scroll .body,
.arrow-scroll .point,
.footer-navigation a,
.footer p {
  transition: background-color, color .2s ease-in-out;
}
.light .arrow-scroll .body,
.light .arrow-scroll .point {
  background-color: #2c3e50;
}

.dark .arrow-scroll .body,
.dark .arrow-scroll .point {
  background-color: #efefef;
}

.light .footer-navigation a {
  color: #2c3e50;
}

.dark .footer-navigation a {
  color: #efefef;
}
</style>

<script>
export default {
  name: 'my-footer',
  data () {
    return {
      isScrolled: false
    }
  },
  methods: {
    handleScroll () {
      this.isScrolled = window.scrollY > 0
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
