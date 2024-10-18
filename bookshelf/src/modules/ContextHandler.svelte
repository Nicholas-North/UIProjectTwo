<script>
    import { setContext } from 'svelte';
    import Browse from "./browse.svelte";
    import ExampleHome from './ExampleHome.svelte';
    import GenreBrowse from './GenreBrowse.svelte';
    import Search from "./search.svelte";
    import Result from "../lib/Result.svelte";

    export let books = [];

    let activeModule = 'home';
    let filteredGenre = 'All';
    let filteredBooks = [];

    $: console.log(`activeModule changed to: ${activeModule}`);

    function setActiveModule(module) {
        activeModule = module;
    }
    function setFilteredGenre(genre) {
        filteredGenre = genre;
    }
    function setFilteredBooks(book) {
        filteredBooks = book;
    }
  
    setContext('setActiveModule', setActiveModule);
    setContext('setFilteredGenre', setFilteredGenre);
    setContext('setFilteredBooks', setFilteredBooks);

</script>

<main>
    {#if activeModule === 'home'}
        <ExampleHome />
    {/if}   
    {#if activeModule === 'search'}
        <Search books={books}/>
    {/if}
    {#if activeModule === 'Result'}
        <Result filteredBooks={filteredBooks}/>
    {/if}
    {#if activeModule === 'browse'}
        <Browse books={books} />
    {/if}
    {#if activeModule === 'genre'}
        <GenreBrowse genre={filteredGenre} books={books} />
    {/if}   
</main>