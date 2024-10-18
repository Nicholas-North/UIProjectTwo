<script>
  export let books = [];
  
  // Sort books by popularity and limit to top 9
  let sortedBooks = books.sort((a, b) => b.popularity - a.popularity).slice(0, 9);
  let currentIndex = 0;

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
      <img src={sortedBooks[currentIndex].cover} alt={sortedBooks[currentIndex].title} />
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
  .carousel {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      /* left: 50%; */
      /* top: 50%; */
      /* transform: translate(-50%, -50%); */
      background-color: white;
      padding: 1rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .arrow {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: black;
  }

  .book {
    text-align: center;
    position: relative;
  }

  .book-info {
    position: relative;
  }

  .book img {
    max-width: 100px;
    transition: opacity 0.3s;
  }

  .book img:hover {
    opacity: 0.7;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    opacity: 0;
    transition: opacity 0.3s;
  }

    export let books = [];
  
    // Sort books by popularity and limit to top 9
    let sortedBooks = books.sort((a, b) => b.popularity - a.popularity).slice(0, 9);
    let currentIndex = 0;
  
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
        <img src={sortedBooks[currentIndex].cover} alt={sortedBooks[currentIndex].title} />
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
    .carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        /* left: 50%; */
        /* top: 50%; */
        /* transform: translate(-50%, -50%); */
        background-color: white;
        padding: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    .arrow {
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: black;
    }
  
    .book {
      text-align: center;
      position: relative;
    }
  
    .book-info {
      position: relative;
    }
  
    .book img {
      max-width: 100px;
      transition: opacity 0.3s;
    }
  
    .book img:hover {
      opacity: 0.7;
    }
  
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      opacity: 0;
      transition: opacity 0.3s;
    }
  
    .book-info:hover .overlay {
      opacity: 1;
    }
  </style>
