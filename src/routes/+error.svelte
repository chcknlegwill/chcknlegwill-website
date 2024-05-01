<script>
    import Header from "$lib/components/header.svelte";
</script>


<Header/>
<main class="main">
    <h1>404</h1>
    <h2>Not Found</h2>
</main>

<style>
    @import "/src/lib/styles/style.css";

    .main {
        margin-top: 2%;
        display: flex;
        flex-direction: column;
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