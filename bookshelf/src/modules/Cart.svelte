<script>
    import { getContext } from 'svelte';
    import NavBar from '../lib/NavBar.svelte';

    const removeBookFromCart = getContext('removeBookFromCart');
    const addBookToCart = getContext('addBookToCart');
    const setActiveModule = getContext('setActiveModule');
    const setSelectedBook = getContext('setSelectedBook');

    export let cartBooks = [];

    function deleteSelectedBooks() {
      const checkboxes = document.querySelectorAll('.book-checkbox');
        const selectedBooks = [];
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                selectedBooks.push(cartBooks[index]);
            }
        });

        selectedBooks.forEach(book => {
            removeBookFromCart(book);
        });
    }

    function searchSelectedBooks() {
        const checkboxes = document.querySelectorAll('.book-checkbox');
        const selectedBooks = [];
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                selectedBooks.push(index);
            }
        });
        console.log(selectedBooks);
    }

    function addBooks() {
        setActiveModule('browse');
    }

    function handleBookClick(book) {
        setSelectedBook(book);
        setActiveModule('book');
    }
    const links = [
        { name: 'home', label: 'Home' },
        { name: 'search', label: 'Search' },
        { name: 'browse', label: 'Browse' },
        { name: 'catalog', label: 'Catalog' },
        { name: 'cart', label: 'Cart' }
    ];

</script>
  
<main>
  <NavBar links={links}/>
  <div class="cart-container">
    <div class="header">
      <h2>Items in Cart</h2>
    </div>
    {#each cartBooks as book}
      <div class="book-item">
        <input type="checkbox" class="book-checkbox" />
        <img src={book.img} alt={book.title} class="book-cover" on:click={() => handleBookClick(book)}/>
        <div class="book-details">
          <h3 on:click={() => handleBookClick(book)}>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Shelf: {book.shelf}</p>
        </div>
      </div>
    {/each}
  </div>
  <div class="buttons">
    <button on:click={deleteSelectedBooks}>Delete Selected Books</button>
    <button on:click={searchSelectedBooks}>Search Selected Books</button>
    <button on:click={addBooks}>Add Books</button>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .cart-container {
    width: 100%;
    max-height: 700px; /* Increased height */
    overflow-y: auto; /* Enable vertical scrolling */
    margin-bottom: 20px;
  }

  .header {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    color: black;
    text-align: center;
  }

  .book-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .book-checkbox {
    margin-right: 10px;
  }

  .book-cover {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }

  .book-details {
    flex-grow: 1;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .buttons button {
    flex: 1;
    margin: 0 5px;
    padding: 10px;
  }
</style>