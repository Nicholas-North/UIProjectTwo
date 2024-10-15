<script>
    import { getContext } from 'svelte';

    import NavBar from "../lib/NavBar.svelte";

    export let genre = "";
    export let books = [];

    const setActiveModule = getContext('setActiveModule');
    const setFilteredGenre = getContext('setFilteredGenre');
    const links = [
        { name: 'home', label: 'Home' },
        { name: 'search', label: 'Search' },
        { name: 'catalog', label: 'Catalog' }
    ];

    let filteredBooks = [];

    $: filteredBooks = books.filter(book => book.genre.includes(genre));

    function handleBack() {
        setFilteredGenre('All');
        setActiveModule('browse');
    }
</script>

<main>
    <NavBar {links}/>
    <button on:click={() => handleBack()}>Browse</button>
    <h1>Books in {genre}</h1>
    <div class="book-list">
        {#each filteredBooks as book}
            <div class="book-item">
                <img src={book.cover} alt={book.title} class="book-cover"/>
                <div class="book-details">
                    <h2>{book.title}</h2>
                    <p>Author: {book.author}</p>
                    <p>Page Count: {book.pageCount}</p>
                    <p>Rating: {book.rating}</p>
                </div>
            </div>
        {/each}
    </div>
</main>

<style>
    .book-list {
        max-height: 80vh;
        overflow-y: auto;
        padding: 1rem;
    }
    .book-item {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
    .book-cover {
        width: 128px;
        height: 192px;
        margin-right: 1rem;
    }
    .book-details {
        flex: 1;
    }
</style>