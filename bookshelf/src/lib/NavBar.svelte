<script>
    import {getContext} from 'svelte';
    export let links = [];

    const setActiveModule = getContext('setActiveModule');
</script>

<nav>
    <ul>
        {#each links as link}
            <li><a href={`#${link.name}`} on:click={() => setActiveModule(link.name)}>{link.label}</a></li>
        {/each}
    </ul>
  </nav>
  
  <style>
    nav {
      position: relative;
      top: 0;
      width: 100%;
      background-color: #333;
      color: white;
      padding: 1rem;
    }
  
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: flex-start;
    }
  
    li {
      display: inline;
    }
  
    a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
    }
  
    a:hover {
      background-color: #575757;
    }
  </style>