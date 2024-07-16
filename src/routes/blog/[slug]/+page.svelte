<script>
	export let data;
    const { title, date, Content } = data;
    //above is to import data from .md files

    import HeaderBlogSub from '$lib/components/blog/headerBlogSub.svelte';
    import Time, { svelteTime } from "svelte-time";

</script>

<svelte:head>
    <title>Blog - {title}</title>
</svelte:head>

<HeaderBlogSub/>
<div class="article-container">
    <article>
    <h1 class="title-blog">{title}</h1>
    <p>Published: <Time timestamp="{date}"></Time> </p>
    <hr>
    <Content />
</article>
</div>  

<style>
    
    @import "$lib/styles/blog/blog.css";

</style>