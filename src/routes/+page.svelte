<script>
  // @ts-ignore (works fine for me...)
  import Header from '$lib/components/header.svelte';
  import Time from "svelte-time";
  
  export let data;
  const { randomPost } = data;

</script>
<svelte:head>
    <title>William - personal website</title>
</svelte:head>

<Header/>
<main class="main">
  <div class="intro">
    <p>Hello. Welcome to my site. You can find more about me on the <a href="/about" id="link">>About</a>
    page, read something on the <a href="/blog" id="link" >>blog </a> or -> explore some of my <a href="/projects" id="link" >>projects </a>
   (or use the buttons below).</p>
  <p>To go back to the previous page, all you need to do is click the heading at the top (Chcknlegwill in this case) and you'll be sent to the previous page.
    Or you can use the newly added navigation bar just below the header to go to different pages.
  </p>

  </div>
  <div class="buttons">
    <div class="buttons-container">
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
  </div>

  <div class="rand-container">
    <div class="spacer"></div>    
    <div class="desc">
      <p>Random article from <a href="/blog" id="link">>blog</a> or <a href="/projects" id="link">>projects</a> below:</p>
      <!-- p><a id="link" href="$page.url.pathname">Read full post here</a></p> -->
    </div>

      <hr>
      <div class="rand">
        <h1>Title: {randomPost.title}</h1>
        <p>Published: <Time timestamp="{randomPost.date}" /></p>
        <!-- have to add Time in here to as it uses different code to load the content-->
        <svelte:component this={randomPost.Content} />
      </div>
    </div>
  </div>

 
</main>


<style lang="scss">
  /*lang="scss" -> this enables the use of sass*/

  
  /* has independent styling for buttons as they 
  are different as they have specific sizes for the content
  - on the main page they are only one word so I need them big*/
    @import "../lib/styles/blog/blog.css";
    button {
      min-width: 225px; /*to max length of largest button (projects)*/
      height: auto;
      font-size: 38px;
    }

    /* for the random at the bottom of the page */

    .spacer {
      margin-top: 100px;
    }

    .buttons {
      display: flex;
      flex-direction: column;
    }
    
    a {
      color: rgb(85, 165, 85);
    }
    a {
      color: black;
    }
    
</style>