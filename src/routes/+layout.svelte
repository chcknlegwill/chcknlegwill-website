<!--layout - applys globally-->

<script>
    import Header from '$lib/components/header.svelte';
    import Body from '$lib/components/main.svelte'
</script>

<Header />

<main>
    <slot />
    <Body></Body>
</main>
<!--main -> slot - this "slots" in the content between 
the header and the footer (main content in the middle)-->

<footer><!--footer content goes here--></footer>
