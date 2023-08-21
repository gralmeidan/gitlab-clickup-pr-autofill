<script lang="ts">
  import type { Options } from 'src/types/configs.types';
  import OptionInput from './OptionInput.svelte';
  import TextInput from './TextInput.svelte';
  import TitleOption from './TitleOption.svelte';
  import CopyPaste from './CopyPaste.svelte';

  export let configs: Options;
  export let handleSave: (data: Options) => Promise<void>;
</script>

<main class="container lg:max-w-screen-lg">
  <div class="flex justify-between">
    <h1 class="my-3">Options</h1>
    <CopyPaste bind:configs />
  </div>
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
    name="reviewer-enabled"
    bind:checked={configs.reviewer.enabled}
  >
    <TextInput
      name="reviewer"
      placeholder="Reviewer"
      bind:value={configs.reviewer.value}
    />
  </OptionInput>
  <button on:click={() => handleSave(configs)} class="py-2 text-lg my-4">
    SAVE
  </button>
</main>
