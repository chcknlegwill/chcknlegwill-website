<!--layout - applies globally-->

<script>    
   //import Header from '$lib/components/header.svelte';

    //import Body from '$lib/components/main.svelte'
    //these are global imports and effect every page - need
    //separate components for blog and projects (& other pages after that)


    //need to get the dark/mode function in here
    // as its applied globally  and SHOULDNT!! have any loading issues that I've been getting recently 

  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  
  onMount(() => {
    if (browser) {
      document.documentElement.style.visibility = 'visible';
    }
  });
</script>

<style global>
  :root {
    visibility: hidden; /* Hidden until hydrated */
  }
</style>




<svelte:head>
</svelte:head>
<main>
    <slot />
</main>
<!--main -> slot - this "slots" in the content between 
the header and the footer (main content in the middle)-->

<footer><!--footer content goes here--></footer>
