
<header>
  <div class="header">
     <div class="links">
          <a href="https://github.com/chcknlegwill/" target="_blank">
              <img class="github" id="github"  alt="github logo" src="{githubImg}"/>
          </a>
      </div>
      <div class="title-container">
        <a href="/blog">
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
    <div class="nav">
      <div class="nav-btn">
        <a href="/">
          <p>Home</p>
        </a>
      </div>
      <div class="nav-btn">
        <a href="/blog">
          <p>Blog</p>
        </a>
      </div>
      <div class="nav-btn">
        <a href="/about">
          <p>About</p>
        </a>
      </div>
      <div class="nav-btn">
        <a href="/projects">
          <p>Projects</p>
        </a>
      </div>
    </div>
  </nav>
<script>
  import githubImg from "../../assesets/github.png";

  import { page } from "$app/stores"
  const url = $page.url.pathname

  //going to have to do a messy if statement with the url
  //for now, but it should work this way.

  //get it functioning with all other pages before the fancy stuff tho

</script>

<style>
@import "../../styles/headers/header.css";


* {
  font-family: Fira Code;
}


/*
header {
  border: #b2a687 solid 2px;
  padding-inline: 50px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  display: flex;
  flex-direction: row;
  flex-flow: row;
  flex-grow:0.5;
  margin-top: -1px;
  margin-bottom: 10px;
  padding-bottom: 5px;
}


h1 {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

*/
</style>