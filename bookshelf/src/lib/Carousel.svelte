<script>
  import { getContext } from 'svelte';
  export let books = [];


  const setActiveModule = getContext('setActiveModule');
  const setFilteredGenre = getContext('setFilteredGenre');
  const setSelectedBook = getContext('setSelectedBook');

  function handleBookClick(book) {
      setSelectedBook(book);
      setActiveModule('book');
  }


  // Sort books by popularity and limit to top 15
  let sortedBooks = books.sort((a, b) => b.rating - a.rating).slice(0, 15);
  let currentIndex = 0;
  function prevBook() {
    currentIndex = (currentIndex - 1 + sortedBooks.length) % sortedBooks.length;
  }

  function nextBook() {
    currentIndex = (currentIndex + 1) % sortedBooks.length;
  }
</script>

  function prevBook() {
    currentIndex = (currentIndex - 1 + sortedBooks.length) % sortedBooks.length;
  }

  function nextBook() {
    currentIndex = (currentIndex + 1) % sortedBooks.length;
  }
</script>
  
<div class="carousel">
  <button on:click={prevBook} class="arrow left">&lt;</button>
  <div class="book">
    <div class="book-info">
      <img src={sortedBooks[currentIndex].img} alt={sortedBooks[currentIndex].title} on:click={() => handleBookClick(sortedBooks[currentIndex])}/>
      <div class="overlay">
        <h2>{sortedBooks[currentIndex].title}</h2>
        <p>{sortedBooks[currentIndex].author}</p>
        <p>{sortedBooks[currentIndex].genre}</p>
      </div>
    </div>
  </div>
  <button on:click={nextBook} class="arrow right">&gt;</button>
</div>

<style>
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10; /* Ensure buttons are above the overlay */
    background-color: rgba(255, 255, 255, 0.8); /* Optional: make buttons more visible */
    border: none;
    padding: 10px;
    cursor: pointer;
    color: #6C584C;
  }

  .arrow.left {
    left: 0
  }

  .arrow.right {
    right: 0
  }

  .book {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .book-info {
    position: relative;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    color: #f0ead2;
    padding: 10px;
    z-index: 5; /* Ensure overlay is below the buttons */
    max-height: 50%; /* Ensure overlay does not cover the entire book */
    overflow: auto; /* Allow scrolling if content is too large */
    opacity: 0; /* Initially hidden */
    transition: opacity 0.3s ease; /* Smooth transition */
  }

  .book-info:hover .overlay {
    opacity: 1; /* Show overlay on hover */
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>
