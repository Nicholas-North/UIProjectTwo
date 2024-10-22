<script>
    import { getContext } from 'svelte';
    import NavBar from './NavBar.svelte';

    const checkSelectBook = getContext('checkSelectBook');
    const getSelectBooks = getContext('getSelectBooks');

    let books = getSelectBooks();

    const links = [
        { name: 'home', label: 'Home' },
        { name: 'search', label: 'Search' },
        { name: 'browse', label: 'Browse' },
        { name: 'catalog', label: 'Catalog' },
        { name: 'cart', label: 'Cart' }
    ];
</script>

<main>
    <NavBar links={links}/>
    <div class='displaybox'>
        <h1>Find your Book{#if books.length > 1}s{/if}</h1>
        <p>They will be light up via LED. Leave this page once you have found them to turn them off.</p>
    </div>
</main>

<style>
    .displaybox {
        padding:0;
        text-align:center;
        color:#6C584C;
    }

    .displaybox::backdrop{
        background: rgba(0,0,0,0.3);
    }
</style>