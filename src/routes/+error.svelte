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
    @import "/src/lib/styles/style.css";

    .main {
        margin-top: 2%;
        display: flex;
        flex-direction: column;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h2 {
        font-size: 40px;
        color: #ebdbb2;
    }

    h1 {
        font-size: 60px;
        color: #cc241d;
    }
</style>