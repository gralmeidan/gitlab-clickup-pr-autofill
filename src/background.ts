import { getOptions } from './helpers/storage';
import autofill from './scripts/autofill';

chrome.action.onClicked.addListener(tab => {
  getOptions().then(data => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: autofill,
      args: [data],
    });
  });
});
