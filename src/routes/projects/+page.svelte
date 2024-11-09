<script lang="ts">
    import Header from "$lib/components/header.svelte"
    import Time, { svelteTime } from  "svelte-time";
    import { fade } from "svelte/transition";


    export let data;
    const { title, date, lastModified, Content } = data;


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
    <title>Projects</title>
</svelte:head>


<Header/>
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

         <div class="dates">

          <p class="blog-date">Date added: <Time timestamp="{post.meta.date}"/></p> <p class="blog-date">|</p>
          <p class="blog-date">Last Updated: <Time timestamp="{post.meta.lastModified}"/></p>

         </div>
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


<style lang="scss">
    @import "../../lib/styles/blog/blog.css";

    button {
        min-width: 225px;
        height: auto;
        font-size: 38px;
    }
</style>