<script>
    import { getContext } from 'svelte';

    const setActiveModule = getContext('setActiveModule');

</script>

<main>
    <div class="home-container">
        <button class="home-select" id='browse' on:click={() => {setActiveModule('browse');}} style="margin-top:15%;"><p>Browse</p></button>
        <button class="home-select" id='catalog' on:click={() => {setActiveModule('catalog');}}><p>Catalog</p></button>
        <button class="home-select" id='search' on:click={() => {setActiveModule('search');}}><p>Search</p></button>
    </div> 
</main>

<style>
    .home-container{
        width:100%;
        height:100%;
        display:block;
        background-color:#f0ead2;
    }

    .home-select{
        margin:10%;
        float:center;
        display:block;
        flex:1;
        width:80%;
        height:20vh;
        border-radius: 20px;
        background-color: #A98467;
        color:#f0ead2;
        font-size: 35px;
    }
    .home-select:hover {
      background-color: #6C584C;
    }
</style>