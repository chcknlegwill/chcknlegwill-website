<script lang="ts">
  import HeaderBlog from "$lib/components/blog/headerBlog.svelte";
  export let data;

  import Time, { svelteTime } from "svelte-time";
  import { fade } from 'svelte/transition';

  let showDesc = new Map();
  let f = false;

function showDescription(postId: string) {
  showDesc.set(postId, true);
  showDesc = showDesc;
}

function hideDescription(postId: string) {
  showDesc.set(postId, false);
  showDesc = showDesc;
}

</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<HeaderBlog />
<main class="main">
  <!-- add a filter so you can change to 
   have the oldest or the newest first -->
  <div class="button-container"
 
  >
    
    {#each data.posts as post}
      <a href={post.path}>
        <button class="button-blog"
         on:mouseenter={() => showDescription(post.path)}
         on:mouseleave={() => hideDescription(post.path)}
         > <!-- had to become a function as each different button fetches different data-->
         
          <p class="blog-date"><Time timestamp="{post.meta.date}"/></p>
          <p class="blog-title">{post.meta.title}</p>
          <!-- start of blog fade --> 
           {#if showDesc.get(post.path)}
              <p class="blog-description" transition:fade="{{ duration: 300 }}"  >{post.meta.description || "No description available."}</p>
           {:else}
              <p class="blog-description-before">bruh</p>
           {/if}
          <!-- end of blog fade -->
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
    color: #665c54;
  }


</style>
