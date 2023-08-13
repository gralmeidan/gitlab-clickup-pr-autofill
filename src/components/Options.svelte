<script lang="ts">
  import OptionInput from './OptionInput.svelte';
  import type { Options } from 'src/types/configs.types';
  import { onMount } from 'svelte';
  import TextInput from './TextInput.svelte';
  import TitleOption from './TitleOption.svelte';

  const STORAGE_KEY = 'autofill-configs';

  let configs: Options = {
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
  <OptionInput
    label="Assign to me"
    name="assignToMe"
    bind:checked={configs.assignToMe}
  />
  <TitleOption
    bind:configs={configs.title.value}
    bind:checked={configs.title.enabled}
  />
  <OptionInput
    label="Autofill reviewer"
    bind:checked={configs.reviewer.enabled}
    name="reviewer-enabled"
  >
    <TextInput
      bind:value={configs.reviewer.value}
      name="reviewer"
      placeholder="Reviewer"
    />
  </OptionInput>
  <button on:click={handleSave}>save</button>
</main>
