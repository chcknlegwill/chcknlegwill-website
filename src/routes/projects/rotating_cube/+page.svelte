
<script lang="ts">

import Header from "$lib/components/headerProjects.svelte"

import animate from "./cube";
let Animate = animate();
</script>



<svelte:head>
    <title>Rotating cube</title>
</svelte:head>

<Header/>
<animate/>