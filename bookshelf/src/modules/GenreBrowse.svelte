<script>
    import { getContext } from 'svelte';

    import NavBar from "../lib/NavBar.svelte";

    export let genre = "";
    export let books = [];

    const setActiveModule = getContext('setActiveModule');
    const setFilteredGenre = getContext('setFilteredGenre');
    const setSelectedBook = getContext('setSelectedBook');
    const links = [
        { name: 'home', label: 'Home' },
        { name: 'search', label: 'Search' },
        { name: 'browse', label: 'Browse' },
        { name: 'catalog', label: 'Catalog' },
        { name: 'cart', label: 'Cart' }
    ];

    let filteredBooks = [];

    $: filteredBooks = books.filter(book => book.genre.includes(genre));

    function handleBack() {
        setFilteredGenre('All');
        setActiveModule('browse');
    }
    function handleBookClick(book) {
        setSelectedBook(book);
        setActiveModule('book');
    }
</script>

<main>
    <NavBar {links}/>
    <h1 class="head">Books in {genre}</h1>
    <div class="book-list">
        {#each filteredBooks as book}
            <div class="book-item">
                <img src={book.img} alt={book.title} class="book-cover" on:click={() => handleBookClick(book)}/>
                <div class="book-details">
                    <p>{book.title}</p>
                    <p class="bigText">Author: {book.author}</p>
                    <p class="bigText">Page Count: {book.pageCount}</p>
                    <p class="bigText">Rating: {book.rating}</p>
                </div>
            </div>
        {/each}
    </div>
</main>

<style>
    .book-item {
        display: flex;
        align-items: center;
        padding: 2px;
        border: 1px solid black;
        border-radius: 8px;
    }
    .book-cover {
        width: 143px;
        height: 215px;
        margin-left: 10px;
        margin-right: 1rem;
    }
    .book-details {
        flex: 1;
        color: #6C584C;
        font-size: 22px;
    }
    .bigText{
        font-size: 20px;
    }
    .head{
        margin-left: 10px;
        color: #6C584C;
        font-size: 30px;
    }
</style>