<template>
  <Layout>
    <router-view/>
  </Layout>
</template>

<script>
import Layout from '@/components/slot/slot-layout/index';
export default {
  name: 'index',
  data () {
    return {
    };
  },
  components: {
    Layout
  }
};
</script>

<style scoped lang="scss">
</style>
