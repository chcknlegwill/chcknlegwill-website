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
        <a href={post.path}>
            <button class="button">
                {post.meta.title}
            </button>
        </a>
    {/each}
   </div>
</main>

<!--
{#each data.posts as post}
            <a href={post.path}>
                {post.meta.title}
            </a>
       </li> 
    {/each}
    -->