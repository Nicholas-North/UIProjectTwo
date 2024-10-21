<script>
    import { getContext } from 'svelte';

    const setActiveModule = getContext('setActiveModule');

</script>

<main>
    <div class="home-container">
        <button class="home-select" id='browse' on:click={() => {setActiveModule('browse');}}><p>Browse</p></button>
        <button class="home-select" id='catalog' on:click={() => {setActiveModule('catalog');}}><p>Catalog</p></button>
        <button class="home-select" id='search' on:click={() => {setActiveModule('search');}}><p>Search</p></button>
        <button class="home-select" id='placeholder'><p>Placeholder</p></button>
    </div> 
</main>

<style>
    .home-container{
        width:100%;
        height:100%;
        display:block;
    }

    .home-select{
        float:left;
        display:block;
        flex:1;
        width:50%;
        height:49vh;
    }

    .overlay{
        position:fixed;
        display:none;
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 2;
    }
</style>