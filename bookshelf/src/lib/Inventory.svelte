<script>
    import { getContext } from 'svelte';
    import books from '../assets/books.json';
    import NavBar from '../lib/NavBar.svelte';

    const setActiveModule = getContext('setActiveModule');
    const links = [
        { name: 'home', label: 'Home' },
        { name: 'search', label: 'Search' },
        { name: 'browse', label: 'Browse' }
    ]

    let pageCount = 0;        
    let titles = Object.keys(books);
    $: currentBooks = books.slice(50*pageCount,50*pageCount+50);
    console.log(Object.keys(books[1]));

</script>

<div>
    <NavBar {links}/>
    <table>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Pages</th>
            <th>Shelf</th>
        </tr>
        {#each currentBooks as book}
            <tr>
                <td><a class="booktitle" on:click={() => {setActiveModule('placeholder')}}>{book['title']}</a></td>
                <td>{book['author']}</td>
                <td>{book['genre']}</td>
                <td>{book['rating']}</td>
                <td>{book['pages']}</td>
                <td>{book['shelf']}</td>
            </tr>
        {/each}
    </table>
    <button on:click={() => {pageCount -= pageCount!=0 ? 1 : 0; console.log(pageCount)}}>&lt</button>
    <button on:click={() => {pageCount += (pageCount+1)*50 >= books.length ? 0 : 1; console.log(pageCount)}}>&gt</button>
</div>

<style>
    .booktitle:hover{
        color:blue;
        cursor: pointer;
    }
</style>