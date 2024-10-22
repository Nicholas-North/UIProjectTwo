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
      width: 93.9%;
      background-color: #6C584C;
      color: #f0ead2;
      padding: 1rem;
      font-size: 22px;
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
      color: #f0ead2;
      text-decoration: none;
      padding: 0.5rem 1rem;
    }
  
    a:hover {
      background-color: #352100;
    }
  </style>