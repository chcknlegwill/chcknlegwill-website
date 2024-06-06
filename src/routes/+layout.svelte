<!--layout - applys globally-->

<script lang="ts">
    //import Header from '$lib/components/header.svelte';
    //import Body from '$lib/components/main.svelte'
    //these are global imports and effect every page - need
    //seperate components for blog and projects (& other pages after that)

</script>


<svelte:head>
</svelte:head>
<main>
    <slot />
</main>
<!--main -> slot - this "slots" in the content between 
the header and the footer (main content in the middle)-->

<footer><!--footer content goes here--></footer>

<style>
    *{
        font-family: 'Fira Code';
    }
</style>