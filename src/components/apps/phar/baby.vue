<template>
  <transition name="slide">
    <div class="baby">
      11111111111
    </div>
  </transition>
</template>

<script>


export default {
 
}
</script>

<style scoped lang="less">
  .slide-enter-active,.slide-leave-active{
    transition: all 0.3s
  }
  .slide-leave,.slide-leave-active{
    transform: translate3d(100%, 0, 0);
  }
  .baby{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #222;
  }
</style>