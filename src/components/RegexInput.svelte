<script lang="ts">
  import TextInput from './TextInput.svelte';

  export let regex: string;
  export let replace: string;
  export let key: number;
  export let remove: any;
</script>

<div class="flex w-full gap-2 mb-4">
  <div class="flex-grow">
    <TextInput name="regex" placeholder="RegEx" bind:value={regex} />
  </div>
  <div>
    <TextInput name="replace" placeholder="Replace" bind:value={replace} />
  </div>
  {#if key != 0}
    <div class="flex flex-col">
      <button
        class="material-symbols-rounded w-fit p-3 grow border-rose-700
        text-rose-700 hover:border-rose-600 hover:text-rose-600"
        on:click={remove}>delete_forever</button
      >
    </div>
  {/if}
</div>
