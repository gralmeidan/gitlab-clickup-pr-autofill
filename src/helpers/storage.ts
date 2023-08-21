import type { Options } from 'src/types/configs.types';

const DEFAULT_OPTIONS: Options = {
  assignToMe: false,
  reviewer: {
    enabled: false,
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

export const STORAGE_KEY = 'autofill-configs';

export async function getOptions(): Promise<Options> {
  const options = await chrome.storage.sync.get(STORAGE_KEY);
  console.log(options);
  return options[STORAGE_KEY] ?? DEFAULT_OPTIONS;
}

export async function setOptions(data: Options): Promise<void> {
  return chrome.storage.sync.set({
    [STORAGE_KEY]: data,
  });
}
