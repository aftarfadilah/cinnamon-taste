<template>
  <div class="switch">
    &nbsp;
  </div>
</template>

<style>
  #switch {
    padding: 15px;
    cursor: pointer;
  }

  .switch {
    position: fixed;
    right: 5%;
    bottom: 8vh;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    z-index: 12;
    border: 2px solid;
    transition: .2s ease-in-out;
    animation: jumps infinite 5s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  .light .switch {
    border-color: #f4ce88;
    box-shadow: 0 0 10px 4px #f4ce88;
    transform: scale(1.2);
  }

  .dark .switch {
    border-color: #efefef;
    box-shadow: 0 0 10px 4px #efefef;
  }

  @keyframes jumps {
    0%
    {
      transform: translateY(10px);
    }
    50%
    {
      transform: translateY(-10px);

    }
    100%
    {
      transform: translateY(10px);
    }
  }
</style>

<script>
export default {
  name: 'dark-switch',
  props: ['isDarkTheme']
}
</script>
