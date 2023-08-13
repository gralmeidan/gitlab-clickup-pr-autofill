<script lang="ts">
  export let regex: string;
  export let replace: string;
  export let key: number;
  export let remove: any;
</script>

<div class="flex w-full gap-2 mb-4">
  <div class="flex-grow">
    <input
      type="text"
      name="regex"
      id="{key}-title-regex-value"
      placeholder="RegEx"
      class="placeholder:opacity-50"
      spellcheck="false"
      bind:value={regex}
    />
  </div>
  <div>
    <input
      type="text"
      name="replace"
      id="{key}-title-replace-value"
      placeholder="Replace"
      class="placeholder:opacity-50"
      spellcheck="false"
      bind:value={replace}
    />
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

<style>
  input {
    font-family: 'Ubuntu Mono', monospace;
    @apply text-base mb-0;
  }
</style>
