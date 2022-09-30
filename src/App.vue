
<template>
  <canvas id="webgl"></canvas>
</template>

<script >
import useThree from './composables/three'

export default {


  mounted() {
    const { animate } = useThree()

    animate();
  },
  data() {
    return { count: 0 }
  }
}
</script>


<style>
body {
  margin: 0;
  padding: 0
}
</style>
