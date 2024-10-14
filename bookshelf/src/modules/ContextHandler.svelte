<script>
    import { setContext } from 'svelte';
    import Browse from "./browse.svelte";
    import ExampleHome from "./ExampleHome.svelte";
    import GenreBrowse from './GenreBrowse.svelte';
    import Search from "./Search.svelte";

    export let books = [];

    let activeModule = 'home';
    let filteredGenre = 'All';
    $: console.log(`activeModule changed to: ${activeModule}`);

    function setActiveModule(module) {
        activeModule = module;
    }
    function setFilteredGenre(genre) {
        filteredGenre = genre;
    }
    setContext('setActiveModule', setActiveModule);
    setContext('setFilteredGenre', setFilteredGenre);
</script>

<main>
    {#if activeModule === 'home'}
        <ExampleHome />
    {/if}   
    {#if activeModule === 'search'}
        <Search />
    {/if}
    {#if activeModule === 'browse'}
        <Browse books={books} />
    {/if}
    {#if activeModule === 'genre'}
        <GenreBrowse genre={filteredGenre} books={books} />
    {/if}   
</main>