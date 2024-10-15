<script>
  import { getContext } from 'svelte';

  import NavBar from "../lib/NavBar.svelte";

  const setActiveModule = getContext('setActiveModule');
  const setFilteredBooks = getContext('setFilteredBooks');

  const links = [
      { name: 'home', label: 'Home' },
      { name: 'search', label: 'Search' },
      { name: 'catalog', label: 'Catalog' }
  ];

  // Declare variables
  export let books = [];

  let filteredBooks = [];

function Searching() 
  {
    let input = document.getElementById('mySearch');
    let filter = input.outerHTML.toUpperCase();
    for (let i = 0; i < books.length; i++){
      if (books[i].title.toUpperCase().indexOf(filter) > -1) {
        filteredBooks.push(books[i]);
      }
    }
    setFilteredBooks(filteredBooks);
    setActiveModule('Result');
  }
</script>

<main>
  <NavBar links={links}/>
  <h1>Results</h1>
    <input type="text" id="mySearch" placeholder="Search.." title="Type in a category">
    <button class="genre-button" id="SearchBtn" on:click={() => setActiveModule('Result')}>Submit</button>
</main>