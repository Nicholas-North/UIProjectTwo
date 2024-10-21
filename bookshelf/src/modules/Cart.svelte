<script>
    import { getContext } from 'svelte';
    import NavBar from '../lib/NavBar.svelte';

    const removeBookFromCart = getContext('removeBookFromCart');
    const addBookToCart = getContext('addBookToCart');
    const setActiveModule = getContext('setActiveModule');

    function deleteSelectedBooks() {
        const checkboxes = document.querySelectorAll('.book-checkbox');
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                removeBookFromCart(index);
            }
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
  
    export let cartBooks = [];
    const links = [
        { name: 'home', label: 'Home' },
        { name: 'search', label: 'Search' },
        { name: 'catalog', label: 'Catalog' },
        { name: 'cart', label: 'Cart' }
    ];

  </script>
  
  <main>
    <NavBar links={links}/>
    <div class="cart-container">
      {#each cartBooks as book}
        <div class="book-item">
          <input type="checkbox" class="book-checkbox" />
          <img src={book.cover} alt={book.title} class="book-cover" />
          <div class="book-details">
            <h3>{book.title}</h3>
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
      max-height: 400px; /* Adjust as needed */
      overflow-y: auto; /* Enable vertical scrolling */
      margin-bottom: 20px;
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