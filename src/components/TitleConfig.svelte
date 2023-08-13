<script lang="ts">
  import Checkbox from './Checkbox.svelte';
  import type { RegexConfig } from 'src/types/configs.types';
  import RegexInput from './RegexInput.svelte';

  export let configs: RegexConfig[];
  export let enabled: boolean;

  function addField() {
    configs = [
      ...configs,
      {
        regex: '',
        replace: '',
      },
    ];
  }

  function removeField(index: number) {
    configs.splice(index, 1);
    configs = configs;
  }
</script>

<section>
  <Checkbox name="title-enabled" bind:checked={enabled}
    >Autofill titles based on the source branch</Checkbox
  >
  {#if enabled}
    {#each configs as { regex, replace }, i}
      <RegexInput
        bind:regex
        bind:replace
        key={i}
        remove={() => removeField(i)}
      />
    {/each}
    <button
      class="material-symbols-rounded text-4xl hover:text-cyan-500 transition-colors duration-200"
      on:click={addField}
    >
      add
    </button>
  {/if}
</section>
