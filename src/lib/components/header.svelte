
<header class="header">
    <div class="links">
        <a href="https://github.com/chcknlegwill/" target="_blank">
            <img class="github" id="github"  alt="github logo" src="{githubImg}"/>
        </a>
    </div>
    <div class="title-container">
        <a href="/"><h1 class="title">chcknlegwill - Blog</h1></a>
        
    </div>

</header>

<script>
    import githubImg from "../assesets/github.png";
</script>

<style>
    /*
font in /images
using the font that I use for developing
as I think its a very good font (and I like ligatures)
// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 300 to 700
*/
/*blog.html*/

* { 
    font-family: "Fira Code"; /*could use monospace but Fira Code has those sweet, sweet ligatures*/
    font-weight: 450;
}

a {
    text-decoration: none;
}

h1 {
    font-size: 42px;
    margin: 0;
}

.github {
    width: 60px;
    height: 60px;
}

.title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}

.header {
    display: flex;
    align-items: center;
    vertical-align: top;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: solid 2px #ebdbb2;
}

hr.solid {
    color:#b2a687; 
    background-color: #b2a687;
    width: 80%;
}
.title {
    color: #cc241d;
    font-weight: 600;
    letter-spacing: 2px;
    border: #b2a687 solid 1px;
    border-radius: 8px;
    padding: 4px;
}


.container-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.back-btn {
    font-size: 30px;
}

button {
    display: block;
    background-color: #ebdbb2;
    border: 0px solid #cc241d;
    border-radius: 6px;
     -webkit-transition : border 100ms  ease-in-out;
}
button:hover {
    cursor: pointer;
    border-bottom: solid 5px #cc241d;
}

</style>