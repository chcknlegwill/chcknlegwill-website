<script>
import githubImg from "../assets/github.png";

import { page } from "$app/stores"
import HeaderSub from "./blog/HeaderSub.svelte";
$: url = $page.url.pathname

//import Button from "./buttons/light-btn.svelte"
let darkMode = true;

function toggleTheme() {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");

  } else {
    document.body.classList.add("light")
    document.body.classList.remove("dark")
  }
}
</script>

<header>
    <div class="header">
       <div class="links">
            <a href="https://github.com/chcknlegwill/" target="_blank">
                <img class="github" id="github"  alt="github logo" src="{githubImg}"/>
            </a>
        </div>
        <div class="title-container">
          <a href="/">
              <div class=bruh>
               <h1 class="title">Chcknlegwill</h1>
              </div>
          </a>
        </div>
      <div class="links">
        <!--^ this is just a placeholder for now,
        mainly to get the header to stay in the middle with
        the github image on the left screwing up the flexbox
        alignment going more left due to elements on the left-->
      </div> 
    </div>

</header>

<nav> 
  <div class="nav" >
    <div class="bruh">
      <a href="/" class="nav-btn" class:active={url === "/"}>
      <p class="nav-txt">Home</p>
    </a>
    <a href="/blog" class="nav-btn" class:active={url === "/blog"}>
      <p class="nav-txt" >Blog</p>
    </a>
    <a href="/about"  class="nav-btn" class:active={url === "/about"}>
      <p class="nav-txt">About</p>
    </a>
    <a href="/projects" class="nav-btn" class:active={url === "/projects"}>
      <p class="nav-txt">Projects</p>
    </a>
  </div>

<nav_dl-btn>

<light-dark>
  <!--Get logic working here l8r on-->
  <!--gonna add a wrap to get the butts added together 
  gonna have it slanted or curved & add a animation for the 
  transition-->
  <button class="light-dark_bt" id="light" on:click={toggleTheme}>
    {darkMode ? "Light Mode" : "Dark Mode"}
  </button>
</light-dark>

</nav_dl-btn>
</nav> 
<style lang="scss">


@import "../styles/headers/header.css";
</style>