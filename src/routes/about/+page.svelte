<script>
    //need to add content but this is when I implement
    // markdown properly to add content easily
    import Header from "$lib/components/header.svelte"
    // @ts-ignore - .md files work fine thanks to mdsvex
</script>

<svelte:head>
    <title>About me</title>
</svelte:head>

<Header/>
<main class="main">
    <div class="content">
        <p>Hello, My name is William. </p> 
        <p> I am the owner of this domain (used to be a server but changed to hosting on cloudflare pages due to software versions & cost).</p>
        <p>I am a computer science university student end enjoying it a lot. I am interested in all aspects of computer science.
            Feel free to check out my <a id="link" href="/blog">blog</a> or my <a id="link" href="projects">projects</a> if you are interested in exploring this site more.
        </p>
        <p>I would like to give credit to the following people for making this site a possibility: </p>
        <li><a id="link" href="https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog" target="_blank">Josh Collinsworth</a> (A brilliant tutorial on sveltekit & helped me a LOT).</li>
        <li><a id="link" href="https://mayadevbe.me/" target="_blank">MayADevBe</a> (Blog about computer science that has a great colour-scheme & layout that has definitley inspired my own).</li>
    </div>
</main>

<style>
    @import "../../lib/styles/blog/blog.css";
</style>