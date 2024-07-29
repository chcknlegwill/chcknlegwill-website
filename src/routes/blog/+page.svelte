<script>
  import HeaderBlog from "$lib/components/blog/headerBlog.svelte";
  export let data;

  import Time, { svelteTime } from "svelte-time";

</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<HeaderBlog />
<main class="main">
  <!-- add a filter so you can change to 
   have the oldest or the newest first -->
  <div class="button-container">
    {#each data.posts as post}
      <a href={post.path}>
        <button class="button-blog">
          <p class="blog-date"><Time timestamp="{post.meta.date}"/></p>
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

  .button-blog {
    position: relative;
    overflow: hidden;
  }

  .description-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .blog-description {
    color: white;
    padding: 10px;
    text-align: center;
  }

  .button-blog:hover .description-container {
    transform: translateY(0);
  }
</style>
