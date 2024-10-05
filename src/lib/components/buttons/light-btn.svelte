<script lan>


//gotta change this func to change based on Id
//because class is already used

  function toggle() {
    const body = document.body;
    if (body.id === "dark-mode") {
      body.id = "";
    } else {
      body.id = "dark-mode";
    }
  }
</script>

<button on:click={toggle}>
  <slot/></button>
<style>


/*
  button {
    background-color: #d5c4a1 ;
  }
  :global(body.dark-mode) button {
    background-color: brown;
    color: white;
  }
  :global(body.dark-mode .nav_dl-btn)  {
    background-color: #F0E6C3;
  }

  */
</style>
