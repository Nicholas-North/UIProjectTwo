<script>
  import { onMount } from 'svelte';
  import ContextHandler from "./modules/ContextHandler.svelte";

  let data = [];
  onMount(async () => {
        const response = await fetch('src/books.json');
        data = await response.json();
    });
</script>

<main>
  <div class="row">
    <div class="BigCol">
      <img src="Shelf.png" alt="bookshelfs" width="200" height="500">
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
