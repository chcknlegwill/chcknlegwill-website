<script>
  import github_dark from "../../assets/github_dark.png";
  import github_light from "../../assets/github_light.png";

  const light = github_light;
  const dark = github_dark;

  let darkMode = true;
  let githubImg = dark;

  import { page } from "$app/stores";
  $: url = $page.url.pathname;

  // Function to toggle theme and update the image
  function toggleTheme() {
    darkMode = !darkMode;

    if (darkMode) {
      githubImg = dark;
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      githubImg = light;
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', darkMode);
    }
  }

  //gets the light or dark mode from localstorage as defined
  //before with .setItem
  if (typeof window !== 'undefined') {
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
               <h1 class="title">Projects</h1>
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
  </div>
</nav>

<style lang="scss">
@import "../../styles/headers/header.css";

</style>