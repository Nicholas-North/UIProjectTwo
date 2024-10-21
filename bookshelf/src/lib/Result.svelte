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
  <h1>Results</h1>
    <div>
        {#each filteredBooks as book}
            <div class="book-item">
                <img src={book.img} alt={book.title} class="book-cover"/>
                <div class="book-details">
                    <h2>{book.title}</h2>
                    <p>Author: {book.author}</p>
                    <p>Page Count: {book.pages}</p>
                    <p>Rating: {book.rating}</p>
                </div>
            </div>
        {/each}
    </div>
</main>

<style>
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