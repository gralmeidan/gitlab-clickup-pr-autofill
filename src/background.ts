import autofill from './scripts/autofill';

chrome.action.onClicked.addListener(tab => {
  console.log(chrome.scripting);
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    func: autofill,
  });
});
