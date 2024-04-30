<script>
  import Header from '$lib/components/header.svelte';
  import HeaderBlog from '$lib/components/headerBlog.svelte';
</script>
<svelte:head>
    <title>William - personal website</title>
</svelte:head>

<Header/>
<main class="main">
  <div class="container-buttons">
      <a class="button" href="/blog">
        <button>>Blog</button>
      </a>
      <a class="button" href="/projects">
        <button class="button">>Projects</button>
      </a>
  </div>
</main>


<style>
  /* has independant styling for buttons as they 
  are different as they have specific sizes for the content
  - on the main page they are only one word so I need them big*/
    @import "../lib/styles/style.css";
    button {
      font-size: 38px;
    }
</style>