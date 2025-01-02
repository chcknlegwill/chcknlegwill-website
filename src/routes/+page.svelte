<script>
  //import stuff here
  import Header from "$lib/components/header.svelte";
  import Test from "$lib/components/test.svelte";
</script>

<svelte:head>
  <title>William - personal site</title>
</svelte:head>

<Header />
<!-- Main for the main content (for flexbox)-->
<main>
  <div class="intro">
    <p>Hello. Welcome to my site. You can find more about me on the 
      <a href="/about" id="link">>About</a> page, read something on the 
      <a href="/blog" id="link" >>blog </a> or -> explore some of my 
      <a href="/projects" id="link" >>projects </a>(or use the buttons below).</p>
    <p>To go back to the previous page, all you need to do is click the heading at the top (Chcknlegwill in this case) and you'll be sent to the previous page.
    Or you can use the newly added navigation bar just below the header to go to different pages.</p>
  </div>


  <div class="buttons-container">
    <div class="buttons">
      <a href="/blog">
        <button class="button">>blog</button>
      </a>
    </div>
    <div class="buttons">
      <a href="/about">
        <button class="button">>about</button>
      </a>
    </div>
    <div class="button">
      <a href="/projects">
      <button class="button">>projects</button>
      </a>
    </div>
  </div>

  <div class="rand-container">
    <!-- implement this in the future -->
  </div>
</main>