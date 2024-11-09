<script>
    import Header from "$lib/components/projects/headerSub.svelte"
    import Time from "svelte-time";
    
    export let data;
    const { title, date, lastModified, content } = data;
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<Header/>
<main class="main">
    <div class="article-container">
        <article>
            <h1 class="title-blog">{title}</h1>
            <p class="little-margin">Published: <Time timestamp={date} /></p>
            <p>Last edited: <Time timestamp={lastModified} /></p>
            <p>last mod {lastModified}</p>
            <hr>
            <svelte:component this={content} />
        </article>
    </div>
</main>

<style lang="scss">
    @import "../../../lib/styles/blog/blog.css";
</style>