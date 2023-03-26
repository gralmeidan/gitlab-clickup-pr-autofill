(() => {
  const [from, target] = [
    ...document.querySelectorAll('#new_merge_request code'),
  ].map(el => el.textContent);

  const titleInput = document.querySelector(
    '#merge_request_title'
  ) as HTMLInputElement;

  const prTitle = from!.replace(/(\S+)_(CU-\S+)/, '[ $2 ] $1');
  titleInput.value = prTitle;

  const assignToMe = document.querySelector(
    'a.assign-to-me-link'
  ) as HTMLAnchorElement;

  assignToMe.click();
})();
