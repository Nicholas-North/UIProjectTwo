<script>
    import { getContext } from "svelte";
    export let books = [];

    const setActiveModule = getContext("setActiveModule");
    const setFilteredGenre = getContext("setFilteredGenre");
  
    // Extract unique genres from the books array
    let genres = [...new Set(books.map(book => book.genre))];

    function handleGenreClick(genre) {
        setFilteredGenre(genre);
        setActiveModule('genre');
    }
  </script>
  
  <div class="genre-container">
    {#each genres as genre}
      <button class="genre-button" on:click={() => handleGenreClick(genre)}>{genre}</button>
    {/each}
  </div>
  
  <style>
    .genre-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px; /* Space between buttons */
      justify-content: center; /* Center the buttons */
      padding: 10px;
    }
  
    .genre-button {
      background-color: #A98467;
      color: #f0ead2;
      border: none;
      border-radius: 20px;
      padding: 10px 20px;
      cursor: pointer;
      transition: background-color 0.3s;
      font-size: 22px;
    }
  
    .genre-button:hover {
      background-color: #6C584C;
    }
  </style>