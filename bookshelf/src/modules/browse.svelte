<script>
    import { getContext } from 'svelte';

    import NavBar from '../lib/NavBar.svelte';
    import Carousel from '../lib/Carousel.svelte';
    import BubbleArray from '../lib/BubbleArray.svelte';

    export let books = [];

    const setActiveModule = getContext('setActiveModule');
    const links = [
        { name: 'home', label: 'Home' },
        { name: 'search', label: 'Search' },
        { name: 'catalog', label: 'Catalog' }
    ];

</script>

<main>
    <NavBar links={links}/>
    <h2>Trending</h2>
    <Carousel books={books} />
    <h2>Genres</h2>
    <BubbleArray books={books} />
</main>