<script>
  import github_dark from "../assets/github_dark.png";
  import github_light from "../assets/github_light.png";
  import sun from "../assets/sun.png";
  import moon from "../assets/moon.png";
  import sunFill from "../assets/sun_fill.png";
  import moonFill from "../assets/moon_fill.png";
  
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export const darkModeStore = writable(true);



  let darkMode = true;
  let githubImg = github_dark;
  let sunVar = sun;
  let moonVar = moonFill;

  import { page } from "$app/stores";
  $: url = $page.url.pathname;


  onMount(() => {
    //set dark mode as default
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    
    //check localStorage
    if (typeof window !== 'undefined') {
        const storedMode = localStorage.getItem('darkMode');
        if (storedMode !== null) {
            darkMode = storedMode === 'true';
            darkModeStore.set(darkMode);
            githubImg = darkMode ? github_dark : github_light;

            sunVar = darkMode ? sun : sunFill;
            moonVar = darkMode ? moonFill : moon
            
            if (darkMode) {
                document.body.classList.add("dark");
                document.body.classList.remove("light");
                //for the main body of the document

            } else {
                document.body.classList.add("light");
                document.body.classList.remove("dark");
                //main body ^
            }
        } else {
            //if no stored preference, store our default dark mode
            localStorage.setItem('darkMode', 'true');
        }
    }
});

function toggleTheme() {
//set ALL images / icons to their dark / light mode
    darkMode = !darkMode;
    darkModeStore.set(darkMode);
    githubImg = darkMode ? github_dark : github_light;
    sunVar = darkMode ? sun : sunFill;
    moonVar = darkMode ? moonFill : moon;
    
    if (darkMode) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
    
    if (typeof window !== 'undefined') {
        // @ts-ignore -- dark mode is default
        localStorage.setItem('darkMode', darkMode);
    }
}


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
      <a href="/blog" class="nav-btn" class:active={url === "/blog" || url.includes("blog")}>
        <p class="nav-txt">Blog</p>
      </a>
      <a href="/about" class="nav-btn" class:active={url === "/about"} > 
        <p class="nav-txt">About</p>
      </a>
      <a href="/projects" class="nav-btn" class:active={url === "/projects" || url.includes("projects")}>
        <p class="nav-txt">Projects</p>
      </a>
    </div>

    <nav_dl-btn>
      <light-dark>
        <button class="theme-toggle" on:click={toggleTheme}> 
          <div class="toggle-container">
            <img src="{sunVar}" id="sun" class:active={!darkMode} />
            <img src="{moonVar}" id="moon" class:active={darkMode}/>
          </div>
         <!-- add alt to stuff above (in yellow)-->
          <!-- {darkMode ? {sun} : {moon}} -->
        </button>
      </light-dark>
    </nav_dl-btn>
  </div>
</nav>

<style>
  @import "../styles/headers/header.css";

  /* add */

  .title {
    color: #cc221d !important;
  }
</style>
