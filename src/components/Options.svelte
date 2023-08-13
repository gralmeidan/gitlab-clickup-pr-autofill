<script lang="ts">
  import OptionInput from './OptionInput.svelte';
  import type { Configs } from 'src/types/configs.types';
  import { onMount } from 'svelte';
  import TitleConfig from './TitleConfig.svelte';

  const STORAGE_KEY = 'autofill-configs';

  let configs: Configs = {
    assignToMe: true,
    reviewer: {
      enabled: true,
      value: '',
    },
    title: {
      enabled: false,
      value: [
        {
          regex: 'regular exp(re)ssion',
          replace: '$1 $2',
        },
      ],
    },
  };

  onMount(() => {
    chrome.storage.sync.get(STORAGE_KEY, data => {
      configs = data[STORAGE_KEY] ?? configs;
    });
  });

  const handleSave = () => {
    console.log(configs);
    chrome.storage.sync.set({ [STORAGE_KEY]: configs });
  };
</script>

<main class="container lg:max-w-screen-lg">
  <TitleConfig
    bind:configs={configs.title.value}
    bind:checked={configs.title.enabled}
  />
  <OptionInput
    label="Assign to me"
    name="assignToMe"
    bind:checked={configs.assignToMe}
  />
  <button on:click={handleSave}>save</button>
</main>
