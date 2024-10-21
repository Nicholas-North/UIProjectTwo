<script>
  import { getContext } from 'svelte';

  import NavBar from "../lib/NavBar.svelte";

  const setActiveModule = getContext('setActiveModule');

  const links = [
      { name: 'home', label: 'Home' },
      { name: 'search', label: 'Search' },
      { name: 'catalog', label: 'Catalog' }
  ];

  // Declare variables
  export let filteredBooks = [];

</script>

<main>
  <NavBar links={links}/>
  <h1 class="head">&nbsp; Results</h1>
    <div>
        {#each filteredBooks as book}
            <div class="book-item">
                <img src={book.img} alt={book.title} class="book-cover"/>
                <div class="book-details">
                    <h3>{book.title}</h3>
                    <p class="bigText">Author: {book.author}</p>
                    <p class="bigText">Page Count: {book.pages}</p>
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
      border: 1px solid #f0ead2;
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
    font-size: 22px;
  }
  .head{
    color: #6C584C;
    font-size: 30px;
  }
</style>