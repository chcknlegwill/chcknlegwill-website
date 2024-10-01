<script>
  function toggle() {
    window.document.body.classList.toggle("dark-mode")
  }
</script>

<button on:click={toggle}>
  <slot/>
</button>
<style>
  button {
    background-color: #d5c4a1 ;
  }
  :global(body.dark-mode) button {
    background-color: brown;
    color: white;
  }
  :global(body.dark-mode) {
    background-color: #F0E6C3;
  }
</style>
