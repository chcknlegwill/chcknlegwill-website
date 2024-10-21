<script>
    import Header from "$lib/components/header.svelte"

</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>


<Header/>
<main class="main">
    <div class="container-buttons">
        <a href="projects/rotating_cube">
            <button class="button">rotating cube</button>
        </a>
    </div> 
</main>


<style lang="scss">
    @import "../../lib/styles/blog/blog.css";

    button {
        min-width: 225px;
        height: auto;
        font-size: 38px;
    }
</style>