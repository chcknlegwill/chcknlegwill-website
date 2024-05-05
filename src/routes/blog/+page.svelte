<script >
    import HeaderBlog from "$lib/components/headerBlog.svelte";
    export let data;
</script>


<svelte:head>
    <title>Blog</title>
</svelte:head>

<HeaderBlog/>
<main class="main">
   <div class="button-container">
    {#each data.posts as post}
    <div class="button-element">
        <a href={post.path}>
        <button class="button">
            <p class="blog-title">{post.meta.title}</p>
            <p class="desc-header">Description:</p>
            <p class="blog-desc">{post.meta.description}</p>
        </button>
        </a>
    </div>
    {/each}
        
   </div>
</main>

<style lang="scss">
    @import "$lib/styles/blog.css";
</style>
<!--
{#each data.posts as post}
            <a href={post.path}>
                {post.meta.title}
            </a>
       </li> 
    {/each}
-->