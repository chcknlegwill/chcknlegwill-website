<script>
	

    // @ts-ignore
    import Header from '$lib/components/blog/HeaderSub.svelte';
    import Time, { svelteTime } from "svelte-time";

    
    //add func to add #links to all <a> tags
    export let data;
    const { title, date, lastModified, Content } = data;
    //above is to import data from .md files

    //build issues mean I've gotta rethink how this renders with mdsvex




</script>

<svelte:head>
    <title>Blog - {title}</title>
</svelte:head>

<Header/>
<div class="article-container">
    <article>
    <h1 class="title-blog">{title}</h1>
    <p class="little-margin">Published: <Time timestamp="{date}"></Time> </p>
    <p>Last edited: <Time timestamp="{lastModified}"></Time> </p>
    <hr>
    <Content />
</article>
</div>  

<style>
    @import "$lib/styles/blog/blog.css";
    
</style>