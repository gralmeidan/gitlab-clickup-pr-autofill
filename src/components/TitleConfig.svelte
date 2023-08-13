<script lang="ts">
  import type { RegexConfig } from 'src/types/configs.types';
  import RegexInput from './RegexInput.svelte';

  export let configs: RegexConfig[];

  function addConfig() {
    configs = [
      ...configs,
      {
        regex: '',
        replace: '',
      },
    ];
  }
</script>

<section>
  <h1>Title</h1>
  {#each configs as { regex, replace }, i}
    <RegexInput bind:regex bind:replace key={i} />
  {/each}
  <button
    class="material-symbols-rounded text-4xl hover:text-cyan-500 transition-colors duration-200"
    on:click={addConfig}
  >
    add
  </button>
</section>
