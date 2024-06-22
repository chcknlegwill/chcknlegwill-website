<script>
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'

  import Header from "$lib/components/projects/headerProjectsSub.svelte"
</script>

<Header></Header>
<div class="main">
  <Canvas>
    <Scene />
  </Canvas>
</div>



<style>
  .main {
    height: 80vh;
  }
</style>