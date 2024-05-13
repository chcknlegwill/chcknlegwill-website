<script>
  import Header from '$lib/components/header.svelte';
</script>
<svelte:head>
    <title>William - personal website</title>
</svelte:head>

<Header/>
<main class="main">
  <div class="intro">
    <p>Hello. Welcome to my site. You can find more about me on the <a href="/about" id="link">>About</a>
    page, read something on the <a href="/blog" id="link" >>blog </a> or -> explore some of my <a href="/projects" id="link" >>projects </a>
  </p>

  </div>
  <div class="container-buttons">
    <a href="/blog">
        <button class="button">>Blog</button>
    </a>
  </div>
  <div class="container-buttons">
    <a href="/about">
      <button class="button">>About</button>
    </a>
  </div>
  <div class="container-buttons">
    <a href="/projects">
        <button class="button">>Projects</button>
      </a>
  </div>
 
</main>


<style lang="scss">
  /*lang="scss" -> this enables the use of sass*/

  
  /* has independant styling for buttons as they 
  are different as they have specific sizes for the content
  - on the main page they are only one word so I need them big*/
    @import "../lib/styles/blog/blog.css";
    button {
      min-width: 225px; /*to max length of largest button (projects)*/
      height: auto;
      font-size: 38px;
    }
</style>