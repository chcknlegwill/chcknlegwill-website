<script>
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'

  import Header from "$lib/components/projects/headerSub.svelte"
</script>

<Header></Header>
<div class="main">
  <div class="description">
    <p>This is just to see if 3d will work. I am probably not going to work with 3d for a while but it's nice to have
      something to reference back to if I ever need to.
    </p>
  </div>
  <Canvas>
    <Scene />
  </Canvas>
</div>



<style>
  .main {
    height: 80vh;
  }
</style>