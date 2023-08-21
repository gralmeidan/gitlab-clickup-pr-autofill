<script lang="ts">
  import type { Options } from 'src/types/configs.types';

  export let configs: Options;

  function handleCopy() {
    navigator.clipboard.writeText(JSON.stringify(configs));
  }

  async function handlePaste() {
    try {
      const clipboard = await navigator.clipboard.readText();
      configs = JSON.parse(clipboard);
    } catch {}
  }
</script>

<div class="flex material-symbols-rounded items-center gap-3">
  <button on:click={handleCopy}>content_copy</button>
  <button on:click={handlePaste}>content_paste</button>
</div>

<style>
  button {
    @apply p-3;
  }
</style>
