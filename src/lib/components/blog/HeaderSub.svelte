<script>
    import githubImg from "../../assets/github.png";

    import { page } from "$app/stores"
    $: url = $page.url.pathname

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
      <div class="nav">
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
    </nav>

<style lang="scss">
@import "../../styles/headers/header.css";


nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
}

.nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 80%;
}

.nav-btn {
    position: relative;
    text-decoration: none;
    color: #ebdbb2;
    transition: color 0.3s ease;
}

.nav-txt {
    position: relative;
    z-index: 1;
}

.nav-btn::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: rgb(208, 39, 29);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.nav-btn:hover::after,
.nav-btn.active::after {
    transform: scaleX(1);
}

.nav-btn:hover {
    color: rgb(208, 39, 29);
}

.nav-btn.active {
    color: blueviolet;
}

.nav-btn.active::after {
    background-color: blueviolet;
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