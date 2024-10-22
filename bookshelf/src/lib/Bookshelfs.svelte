<script>
  export let books = [];
  let shelf = 0;
  let numShelves = 7;
  
  // Sort books by popularity and limit to top 9
  let sortedBooks = books.sort((a, b) => b.popularity - a.popularity).slice(0, 9);
  let currentIndex = 0;

  function prevShelf() {
    shelf = shelf - 1
    //currentIndex = (currentIndex - 1 + sortedBooks.length) % sortedBooks.length;
  }

  function nextShelf() {
    currentIndex = (currentIndex + 1) % sortedBooks.length;
  }
</script>

<div class="library">
  <button on:click={prevShelf} class="arrow left">&lt;</button>
  <div class="bookshelf">
    <div class="shelf">
      test
    </div>
    <div class="shelf" style="background-color:black;">
      test 2
    </div>
  </div>
  <button on:click={nextShelf} class="arrow right">&gt;</button>
</div>

<style>
  .library {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      /* left: 50%; */
      /* top: 50%; */
      /* transform: translate(-50%, -50%); */
      padding: 1rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      left:4.3%;
      top:6.9%;
      width:57%;
      height:87%;
  }

  .bookshelf{
    width:94%;
    height:22%;
    background-color: white;
    position:absolute;
    top:1%;
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

  .left{
    left:0;
    position: absolute;
  }

  .right{
    position: absolute;
    right:0;
  }
</style>
