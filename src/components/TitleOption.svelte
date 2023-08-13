<script lang="ts">
  import type { RegexConfig } from 'src/types/configs.types';
  import RegexInput from './RegexInput.svelte';
  import OptionInput from './OptionInput.svelte';

  export let configs: RegexConfig[];
  export let checked: boolean;

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

<OptionInput
  name="title"
  bind:checked
  label="Autofill titles based on source branch"
>
  {#each configs as { regex, replace }, i}
    <RegexInput bind:regex bind:replace key={i} remove={() => removeField(i)} />
  {/each}
  <button
    class="material-symbols-rounded text-4xl hover:text-cyan-500 transition-colors duration-200"
    on:click={addField}
  >
    add
  </button>
</OptionInput>
