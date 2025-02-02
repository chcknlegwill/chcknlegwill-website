<script>
    import Header from "$lib/components/header.svelte";
</script>


<Header/>
<main class="main">
    <div class="container">
        <h1>404</h1>
        <h2>Not Found</h2>
    </div>
    
</main>

<style>

    .main {
        margin-top: 1%;
        display: flex;
        flex-direction: column;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
        font-size: 39px;
        color: #ebdbb1;
    }

    h2 {
        font-size: 59px;
        color: #cc240d;
    }
</style>