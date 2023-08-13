<script lang="ts">
  export let regex: string;
  export let replace: string;
  export let key: number;
</script>

<div class="flex w-full">
  <div class="flex-grow mr-3">
    {#if key == 0}
      <label for="{key}-title-regex-value">Regex</label>
    {/if}
    <input
      type="text"
      name="regex"
      id="{key}-title-regex-value"
      bind:value={regex}
    />
  </div>
  <div>
    {#if key == 0}
      <label for="{key}-title-replace-value">Replace</label>
    {/if}
    <input
      type="text"
      name="replace"
      id="{key}-title-replace-value"
      bind:value={replace}
    />
  </div>
</div>

<style>
  input {
    font-family: 'Ubuntu Mono', monospace;
    @apply text-base;
  }

  label {
    @apply text-sm;
  }
</style>
