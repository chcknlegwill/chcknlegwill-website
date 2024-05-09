<script>
  import HeaderBlog from "$lib/components/headerBlogSub.svelte";
  export let data;

  let mouseOver = false;
  //going to add animations to this once I get the site
  //working on server and know how to use svelte better
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<HeaderBlog />
<main class="main">
  <div class="button-container">
    {#each data.posts as post}
      <a href={post.path}>
        <button class="button-blog">
          <p class="blog-date">{post.meta.date}</p>
          <p class="blog-title">{post.meta.title}</p>
          <p class="blog-desc">{post.meta.description}</p>
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

<style lang="scss">
  @import "$lib/styles/blog/blog.css";
</style>
