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

function Searching(books) 
  {
    let input = document.getElementById('mySearch').value;
    let filter = input.toUpperCase();
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
  <h1 class="text">&nbsp;Results</h1>
    <input type="text" id="mySearch" placeholder="Search.." title="Type in a category">
    <button class="submit-button" id="SearchBtn" on:click={() => Searching(books)}>Search</button>
</main>

<style>
  .text {
      color: #6C584C;
      font-size: 30px;
  }
  #mySearch{
    margin-left: 10px;
    width: 90%;
    font-size: 22px;
    padding: 11px;
    border: 1px solid #ddd;
  }
  .submit-button{
    background-color: gray;
    color: #f0ead2;
    margin-left: 400px;
    margin-top: 5px;
    font-size: 22px;
    padding: 7px;
    border-radius: 10px;
  }
</style>