<script lang="ts">
  import HeaderBlog from "$lib/components/header.svelte";
  export let data;

  import Time, { svelteTime } from "svelte-time";
  import { fade } from 'svelte/transition';

  let showDesc = new Map();

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
         >          

          <p class="blog-date"><Time timestamp="{post.meta.date}"/></p>
          <p class="blog-title">{post.meta.title}</p>
          <!-- start of blog fade --> 
           {#if showDesc.get(post.path)}
              <p class="blog-description" transition:fade="{{ duration: 300 }}">{post.meta.description || "No description available."}</p>
              <!-- make the animation just a bit faster - could make the site seem more responsive -->
           {:else}
              <div class="blog-description"></div>  <!-- Need to get button collapsing & expanding on mouseover -->
              <!-- transition:fade="{{ duration: 300 }}"-->
               <!-- note for later -> look into other transitions, maybe just a rotation or smth like that but the fade looks good for now -->

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
    overflow: hidden;
  }
.blog-description {
    color: #665c54;
}
</style>
