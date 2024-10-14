<script>
    import { getContext } from 'svelte';

    const setActiveModule = getContext('setActiveModule');

</script>

<main>
    <h1>Home</h1>
    <button on:click={() => setActiveModule('browse')}>Browse</button>
</main>