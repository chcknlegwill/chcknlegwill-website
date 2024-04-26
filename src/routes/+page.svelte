<script>
    import Button from "./button.svelte"
</script>
<svelte:head>
    <title>William - personal website</title>
</svelte:head>

<main class="main">
  <div class="container-buttons">
    <div class="buttons">
        <Button class="primary">>Blog</Button>
        <Button class="primary">>Projects</Button>
    </div>
  </div>
</main>


<style>
    @import "../lib/styles/style.css";
</style>