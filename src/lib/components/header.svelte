<script>
  import github_dark from "../assets/github_dark.png";
  import github_light from "../assets/github_light.png";
  
  //importing react libraries for the light/dark button

  const light = github_light;
  const dark = github_dark;

  let darkMode = true;
  let githubImg = dark;

  import { page } from "$app/stores";
  $: url = $page.url.pathname;

//gets the light or dark mode from localstorage as defined
//before with .setItem
if (typeof window !== "undefined") {
  const savedMode = localStorage.getItem('darkMode');
  darkMode = savedMode === 'true' ? true : false;
  githubImg = darkMode ? dark : light;

  if (darkMode) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
    
    // @ts-ignore
    localStorage.setItem('darkMode', darkMode);
}

function toggleTheme() {
    darkMode = !darkMode;
    githubImg = darkMode ? dark : light;
    if (darkMode) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
    
    if (typeof window !== 'undefined') {
        // @ts-ignore
        localStorage.setItem('darkMode', darkMode);
    }
}

console.log(darkMode);

</script>

<header>
  <div class="header">
    <div class="links">
      <a href="https://github.com/chcknlegwill/" target="_blank">
        <img class="github" id="github" alt="github logo" src="{githubImg}" />
      </a>
    </div>

    <div class="title-container">
      <a href="/">
        <div class="bruh">
          <h1 class="title">Chcknlegwill</h1>
        </div>
      </a>
    </div>

    <div class="links">
      <!-- Placeholder to keep header structure -->
    </div>
  </div>
</header>

<nav>
  <div class="nav">
    <div class="bruh">
      <a href="/" class="nav-btn" class:active={url === "/"}>
        <p class="nav-txt">Home</p>
      </a>
      <a href="/blog" class="nav-btn" class:active={url === "/blog"}>
        <p class="nav-txt">Blog</p>
      </a>
      <a href="/about" class="nav-btn" class:active={url === "/about"}>
        <p class="nav-txt">About</p>
      </a>
      <a href="/projects" class="nav-btn" class:active={url === "/projects"}>
        <p class="nav-txt">Projects</p>
      </a>
    </div>

    <nav_dl-btn>
      <light-dark>
        <button on:click={toggleTheme}> <!--- improve styling on this. -->
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </light-dark>
    </nav_dl-btn>
  </div>
</nav>

<style lang="scss">
  @import "../styles/headers/header.css";
</style>
