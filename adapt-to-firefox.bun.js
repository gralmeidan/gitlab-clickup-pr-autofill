import manifest from './dist/manifest.json';
import * as fs from 'fs';

const {
  background: { service_worker },
} = manifest;

delete manifest.background.service_worker;

manifest.background.scripts = [service_worker];

fs.writeFileSync('./dist/manifest-firefox.json', JSON.stringify(manifest));
