<script>
    import { getContext } from 'svelte';

    const setActiveModule = getContext('setActiveModule');

</script>

<main>
    <h1>&nbsp;Home</h1>
    <button on:click={() => setActiveModule('browse')}>Browse</button>
    <button on:click={() => setActiveModule('search')}>Search</button>
</main>