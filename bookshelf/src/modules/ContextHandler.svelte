<script>
    import { setContext } from 'svelte';
    import Browse from "./browse.svelte";
    import ExampleHome from './ExampleHome.svelte';
    import GenreBrowse from './GenreBrowse.svelte';
    import Search from "./Search.svelte";
    import Result from "../lib/Result.svelte";
    import Splash from '../lib/Splash.svelte';
    import Inventory from '../lib/Inventory.svelte';
    import Book from './Book.svelte';
    import Cart from './Cart.svelte';

    export let books = [];

    // let activeModule = 'home';
    let activeModule = 'home';
    let filteredGenre = 'All';
    let filteredBooks = [];
    let selectedBook = books[0];
    let booksInCart = [];
    console.log(booksInCart);

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
    function setSelectedBook(book) {
        selectedBook = book;
    }
    function addBookToCart(book) {
        booksInCart.push(book);
    }
    function removeBookFromCart(book) {
        booksInCart = booksInCart.filter(b => b !== book);
    }
    function checkBookInCart(book) {
        return booksInCart.includes(book);
    }
  
    setContext('setActiveModule', setActiveModule);
    setContext('setFilteredGenre', setFilteredGenre);
    setContext('setFilteredBooks', setFilteredBooks);
    setContext('setSelectedBook', setSelectedBook);
    setContext('addBookToCart', addBookToCart);
    setContext('removeBookFromCart', removeBookFromCart);

</script>

<main>
    {#if activeModule === 'home'}
        <Splash />
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
    {#if activeModule === 'catalog'}
        <Inventory />
    {/if}
    {/if}
    {#if activeModule === 'book'}
        <Book book={selectedBook} isAdded={checkBookInCart(selectedBook)} />
    {/if}
    {#if activeModule === 'cart'}
        <Cart cartBooks={booksInCart} />
    {/if}  
</main>