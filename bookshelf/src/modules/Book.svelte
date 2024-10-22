<script>
    import { getContext } from 'svelte';

    import NavBar from '../lib/NavBar.svelte';
    import Carousel from '../lib/Carousel.svelte';
    import BubbleArray from '../lib/BubbleArray.svelte';

    export let book = {};
    export let isAdded = false;

    const setActiveModule = getContext('setActiveModule');
    const addBookToCart = getContext('addBookToCart');
    const removeBookFromCart = getContext('removeBookFromCart');
    const findBooks = getContext('findBooks');

    const links = [
        { name: 'home', label: 'Home' },
        { name: 'search', label: 'Search' },
        { name: 'browse', label: 'Browse' },
        { name: 'catalog', label: 'Catalog' },
        { name: 'cart', label: 'Cart' }
    ];

    function addBook(book) {
        addBookToCart(book);
        isAdded = true;
    }
    function removeBook(book) {
        removeBookFromCart(book);
        isAdded = false;
    }
</script>

<main>
    <NavBar links={links}/>
    <div class="Book_Info">
        <span class="Lside">
            <img src={book.img} alt={book.title} />
        </span>
        <span class="Rside">
            <h1 class="description">{book.title}</h1>
            <h2 class="description">Author: {book.author}</h2>
            <h2 class="description">Genre: {book.genre}</h2>
            <h3 class="description">Page Count: {book.pages}</h3>
        </span>
    </div>
    <div class="description">
        <p>Description:<br>{book.desc}</p>
    </div>
    <div class="buttons">
        <button on:click={() => {findBooks(book); setActiveModule('find')}}>Find Now</button>
        {#if isAdded === false}
            <button on:click={() => addBook(book)}>Add to Cart</button>
        {:else}
            <button on:click={() => removeBook(book)}>Remove from Cart</button>
        {/if}
    </div>
</main>

<style>
    .Book_Info {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 20px;
        background-color: #f9f9f9; /* Subtle background color */
        border-radius: 8px; /* Rounded corners */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        margin-bottom: 20px; /* Space below the container */
        color: black; /* Text color */
    }
    .Lside, .Rside {
        flex: 1;
    }
    .Lside img {
        max-width: 200px; /* Set a maximum width for the image */
        height: auto;
    }
    .Rside {
        padding-left: 20px;
    }
    .description {
        margin-top: 20px;
        text-align: left; /* Ensure text is left-aligned */
        background-color: #f9f9f9; /* Subtle background color */
        padding: 10px; /* Padding for the description */
        border-radius: 8px; /* Rounded corners */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        color: black; /* Text color */
        font-size: 20px;
    }
    .buttons {
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }
    .buttons button:hover{
        background-color: #6C584C;
    }
    .buttons button {
        margin: 5px;
        padding: 10px 20px;
        background-color: #A98467;
        color: #f0ead2;
        font-size: 22px;
        transition: background-color 0.3s;
    }
</style>