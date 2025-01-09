<script>
  import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
  <title>William - personal website</title>
</svelte:head>


<Header />
<main>
  <div class="intro">
    <p>Hello, Welcome to by site. You can find more about me on the <a href="/about" id="link">>About</a>
    page, read something on the <a href="/blog" id="link" >>blog </a> or -> explore some of my <a href="/projects" id="link" >>projects </a>
   (or use the buttons below).</p>
    <p>To go back to the previous page, all you need to do is click the heading at the top (Chcknlegwill in this case) and you'll be sent to the previous page.
    Or you can use the newly added navigation bar just below the header to go to different pages.
  </p>
  </div>

  <div class="buttons-container">
    <div class="button">
      <a href="/blog">
        <button>>blog</button>
      </a>
    </div>
    <div class="button">
      <a href="about">
        <button>>about</button>
      </a>
    </div>
    <div class="button">
      <a href="projects">
        <button>>projects</button>
      </a>
    </div>
  </div>
</main>


<div class="rand-container">
  <!-- implement the random blog or project article here later (need the base structure first) -->
</div>
