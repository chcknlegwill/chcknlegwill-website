<script>
	export let data;
    const { title, date, Content } = data;
    //above is to import data from .md files

    import HeaderBlogSub from '$lib/components/headerBlogSub.svelte';
</script>

<svelte:head>
    <title>Blog - {title}</title>
</svelte:head>

<HeaderBlogSub/>
<div class="article-container">
    <article>
    <h1 class="title-blog">{title}</h1>
    <p>Published: {date}</p>
    <Content />
</article>

</div>

<style lang="scss">
    @import "$lib/styles/blog/blog.css";
</style>