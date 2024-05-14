<script>
    //need to add content but this is when I implement
    // markdown properly to add content easily
    import Header from "$lib/components/headerAbout.svelte"
    // @ts-ignore - .md files work fine thanks to mdsvex
    import About from "./about.md";
</script>

<svelte:head>
    <title>About me</title>
</svelte:head>

<Header/>
<main class="main">
    <div class="content">
        <About/>
    </div>
</main>

<style>
    @import "$lib/styles/blog/blog.css";
</style>