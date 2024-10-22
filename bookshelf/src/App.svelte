<script>
  import Bookshelfs from "./lib/Bookshelfs.svelte";
  import { onMount } from 'svelte';
  import ContextHandler from "./modules/ContextHandler.svelte";
  import { setContext } from 'svelte';


  let findSelectBooks = [];
  

  function findBooks(books){
      findSelectBooks = books;
  }
  function checkSelectBook(book){
      return findSelectBooks.includes(book);
  }
  function getSelectBooks() {
    return findSelectBooks;
  }

  setContext('findBooks', findBooks);
  setContext('checkSelectBook', checkSelectBook);
  setContext('getSelectBooks', getSelectBooks);

  let data = [];
  onMount(async () => {
        const response = await fetch('src/books.json');
        data = await response.json();
    });
</script>

<main>
  <div class="row">
    <div class="BigCol">\
      <img src="src/assets/bookshelf.jpg" alt="bookshelfs" width=90% height=92.5% style="margin-top:5%; margin-left:5% ">
      <Bookshelfs books={data}/>
    </div>
    <div class="SmallCol">
      <!-- <Browse books={data} /> -->
      <ContextHandler books={data}/>
    </div>
  </div>
</main>

<style>
  .row {
    display: flex;
    height: 100vh;
  }

  .BigCol {
    flex: 2;
    background-color: #DDE5B6;
  }

  .SmallCol {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #F0EAD2;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
