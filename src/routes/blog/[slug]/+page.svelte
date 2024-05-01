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
<article>
    <h1>{title}</h1>
    <p>Published: {date}</p>
    <Content />
</article>

<style lang="scss">
    @import "$lib/styles/style.css";
</style>