<template>
  <section class="main">
    <SlotNumber/>
  </section>
</template>

<script>
import SlotNumber from '@/components/slot/number-block';
export default {
  name: 'index',
  components: {
    SlotNumber
  }
};
</script>

<style scoped lang="scss">
  .main {
  }
</style>
