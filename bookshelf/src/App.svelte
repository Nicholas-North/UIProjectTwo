<script>
    // Declare variables
  let data = [
    { title: "Book 1", author: "Author 1", cover: "src/assets/A Tale of Two Cities.jpg", shelf: "Shelf A", genre: "Historical Fiction", rating: 4, isbn: "1234567890", pages: 300 },
    { title: "Book 2", author: "Author 2", cover: "src/assets/Frankenstein.jpg", shelf: "Shelf B", genre: "Horror", rating: 3, isbn: "0987654321", pages: 200 },
    { title: "Book 3", author: "Author 3", cover: "src/assets/Shadows of Self.jpg", shelf: "Shelf C", genre: "Fantasy", rating: 5, isbn: "1357924680", pages: 400 },
    { title: "Book 4", author: "Author 4", cover: "src/assets/The Canterbury Tales.jpg", shelf: "Shelf D", genre: "Poetry", rating: 2, isbn: "2468013579", pages: 100 },
    { title: "Book 5", author: "Author 5", cover: "src/assets/The Iliad.jpg", shelf: "Shelf E", genre: "Poetry", rating: 1, isbn: "3579246801", pages: 500 },
    { title: "Book 6", author: "Author 6", cover: "src/assets/The Lightning Thief.jpg", shelf: "Shelf F", genre: "Fantasy", rating: 4, isbn: "4680135792", pages: 600 },
    { title: "Book 7", author: "Author 7", cover: "src/assets/The Martian.jpg", shelf: "Shelf G", genre: "Sci-Fi", rating: 3, isbn: "5792468013", pages: 700 },
    { title: "Book 8", author: "Author 8", cover: "src/assets/The Republic.jpg", shelf: "Shelf H", genre: "Philosophy", rating: 5, isbn: "6801357924", pages: 800 },
    { title: "Book 9", author: "Author 9", cover: "src/assets/The Wise Man's Fear.jpg", shelf: "Shelf I", genre: "Fantasy", rating: 2, isbn: "7914680235", pages: 900 },
    { title: "Book 10", author: "Author 10", cover: "src/assets/War and Peace.jpg", shelf: "Shelf J", genre: "Historical Fiction", rating: 1, isbn: "8023579146", pages: 1000 }
  ];

      export let genre = "";
      export let books = data;

      let filteredBooks = [];

  document.getElementById("SearchBtn").addEventListener("click", Searching);

  function Searching() 
  {
    document.getElementById("tester").innerHTML = "Day: ";

    let input = document.getElementById('myInput');
    let filter = input.outerHTML.toUpperCase();
    for (let i = 0; i < books.length; i++){
      if (books[i].title.toUpperCase().indexOf(filter) > -1) {
        filteredBooks.push(books[i]);
      }
    }
  }
</script>

<main>
  <div class="row">
    <div class="BigCol">
      <img src="Shelf.png" alt="bookshelfs" width="200" height="500">
    </div>
    <div class="SmallCol">
      <h1>Books in {genre}</h1>
      <input type="text" id="mySearch" placeholder="Search.." title="Type in a category">
      <button id="SearchBtn">Submit</button>
      <p id="tester"></p>
        <div class="book-list-S">
            {#each filteredBooks as book}
                <div class="book-item">
                    <img src={book.cover} alt={book.title} class="book-cover"/>
                    <div class="book-details">
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Page Count: {book.pageCount}</p>
                        <p>Rating: {book.rating}</p>
                    </div>
                </div>
            {/each}
        </div>
      <p>UI goes here</p>
      
    </div>
  </div>
</main>
