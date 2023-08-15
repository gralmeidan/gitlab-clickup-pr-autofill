import { getOptions, setOptions } from '../helpers/storage';
import '../app.css';
import Options from '../components/Options.svelte';

const target = document.getElementById('app');

async function render() {
  const configs = await getOptions();

  new Options({ target, props: { configs, handleSave: setOptions } });
}

document.addEventListener('DOMContentLoaded', render);
