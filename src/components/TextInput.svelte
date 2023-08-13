<script lang="ts">
  export let name: string = undefined;
  export let placeholder: string = undefined;
  export let spellcheck: boolean = false;
  export let id: string = undefined;
  export let value: string;
</script>

<input type="text" {name} {id} {placeholder} {spellcheck} bind:value />

<style>
  input {
    font-family: 'Ubuntu Mono', monospace;
    @apply text-base mb-0;
  }
</style>
