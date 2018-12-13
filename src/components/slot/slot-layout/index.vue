<template>
  <section class="layout-blue" :style="`backgroundImage: url(${bgImg || layoutBg})`">
    <slot></slot>
  </section>
</template>

<script>
import layoutBg from './img/layout_bg.jpg';
export default {
  name: 'index',
  data () {
    return {
      layoutBg
    };
  },
  props: {
    bgImg: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
  $layoutBg: './img/layout_bg.jpg';
  .layout-blue {
    height: 100%;
    background: url($layoutBg);
    background-size: 100% 100%;
  }
</style>
