<script>
  import { getContext } from 'svelte';
    import App from '../App.svelte';
    import Book from '../modules/Book.svelte';

    export let books = [];

  const checkSelectBook = getContext('checkSelectBook');

  console.log("type: " + typeof(checkSelectBook))

  let colorIndex = 0;
  let colors = ['red', 'blue', 'green', 'purple'];

  function getColor(){
    colorIndex++;
    colorIndex = colorIndex%colors.length;
    return colors[colorIndex];
  }

  let shelf = 0;
  $: numShelves = books[books.length-1]['shelf'].slice(-1).charCodeAt(0) - 64;
  $: shelfBooks = books.filter(book => book['shelf'].slice(-1).charCodeAt(0) - 65 == shelf);
  $: shelf1 = shelfBooks.slice(0,shelfBooks.length/4);
  $: shelf2 = shelfBooks.slice(shelfBooks.length/4,(shelfBooks.length/4)*2);
  $: shelf3 = shelfBooks.slice((shelfBooks.length/4)*2,(shelfBooks.length/4)*3);
  $: shelf4 = shelfBooks.slice((shelfBooks.length/4)*3);


  // Sort books by popularity and limit to top 9
  //let sortedBooks = books.sort((a, b) => b.popularity - a.popularity).slice(0, 9);
  
  let currentIndex = 0;

  function prevShelf() {
    shelf = shelf==0 ? numShelves-1 : shelf-1;
    //currentIndex = (currentIndex - 1 + sortedBooks.length) % sortedBooks.length;
  }

  function nextShelf() {
    //currentIndex = (currentIndex + 1) % sortedBooks.length;
    shelf = Math.abs((shelf + 1) % numShelves);
  }
</script>

<main>
  <h1 class='shelfNumber'>Shelf {String.fromCharCode(shelf+65)}</h1>
  <div class="library">
    <button on:click={prevShelf} class="arrow left">&lt;</button>
    <div class="bookshelf">
      <div class="shelf" style="margin-top:1%">
        {#each shelf1 as book}
          <div class='{checkSelectBook(book) ? "findbook" : 'book'}' style="height:{90+((book['pages']/100)%10)}%; width:{100/shelf1.length}%; background-color:{getColor()};"></div>
        {/each}
      </div>
      <div class="shelf">
        {#each shelf2 as book}
          <div class='{checkSelectBook(book) ? "findbook" : 'book'}' style="height:{90+((book['pages']/100)%10)}%; width:{100/shelf2.length}%; background-color:{getColor()};"></div>
        {/each}
      </div>
      <div class="shelf">
        {#each shelf3 as book}
          <div class='{checkSelectBook(book) ? "findbook" : 'book'}' style="height:{90+((book['pages']/100)%10)}%; width:{100/shelf3.length}%; background-color:{getColor()};"></div>
        {/each}
      </div>
      <div class="shelf">
        {#each shelf4 as book}
          <div class='{checkSelectBook(book) ? "findbook" : 'book'}' style="height:{90+((book['pages']/100)%10)}%; width:{100/shelf4.length}%; background-color:{getColor()};"></div>
        {/each}
      </div>
    </div>
    <button on:click={nextShelf} class="arrow right">&gt;</button>
  </div>
</main>

<style>
  .shelfNumber{
    color:black;
    position:absolute;
    left:31%;
    top:.1%;
    text-align:center;
  }

  .findbook{
    text-align: center;
    position: relative;
    border-style:solid;
    border-color:yellow;
    margin-top: auto;
  }

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
      left:4.6%;
      top:5%;
      width:57%;
      height:89%;
  }

  .bookshelf{
    width:96%;
    height:100%;
  }

  .shelf{
    width:100%;
    height:21%;
    position:relative;
    top:5%;
    margin-bottom: 2.8%;
    display:flex;
    text-align:center;
  }

  .book{
    margin-top: auto;
    text-align: center;
    position: relative;
  }

  .arrow {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: black;
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
