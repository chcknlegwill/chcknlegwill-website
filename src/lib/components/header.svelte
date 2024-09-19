
<header class="header">
    <div class="main">

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

<script>
    import githubImg from "../assesets/github.png";
    import Time from "svelte-time";




</script>

<style>
@import "../styles/style.css";
* {
    font-family: Fira Code;
}


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

</style>