
<template>
  <canvas id="webgl"></canvas>
</template>

<script >
import useThree from './composables/three'

export default {


  mounted() {
    const { addCubes, animate, onMouseMove } = useThree()

    const loop = () => {
      for (let z = -1; z <= 1; z++) {
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            addCubes(x * 2, y * 2, z * 2)
          }
        }
      }
    }

    loop()
    animate();
    window.addEventListener('mousemove', onMouseMove)
  },
}
</script>


<style>
body {
  margin: 0;
  padding: 0
}
</style>
