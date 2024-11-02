<script>
    import Header from "$lib/components/header.svelte"
    import Time, { svelteTime } from  "svelte-time";


    export let data;
    const { title, date, lastModified, Content } = data;

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
        <p>Projects page under development so forgive
            the errors. 11/2/24 
        </p>
        <p>{title}</p>
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