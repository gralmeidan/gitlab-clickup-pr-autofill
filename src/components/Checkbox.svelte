<script lang="ts">
  export let name: string;
  export let checked: boolean;
</script>

<div class="my-2 text-base">
  <input type="checkbox" id="{name}-checkbox" {name} bind:checked />
  <label for="{name}-checkbox"><slot /></label>
</div>
