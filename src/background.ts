import autofill from './scripts/autofill';

chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    func: autofill,
  });
});
