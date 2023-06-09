const showLoading = () => {
  document.createElement('div');

  const loading = document.createElement('div');

  loading.id = 'loading';
  loading.innerHTML =
    '<p style="display: flex; justify-content: center;">Carregando...</p>';

  Object.assign(loading.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '120px',
    height: '40px',
    zIndex: '1000',
    borderRadius: '20px',
    color: '#EEEEEE',
    backgroundColor: '#222222',
    border: 'solid 1px #EEEEEE',
    padding: '8px',
  });

  document.body.appendChild(loading);
};

const changePRTitle = () => {
  const [from, _] = [
    ...document.querySelectorAll('#new_merge_request code'),
  ].map(el => el.textContent);

  const titleInput = document.querySelector(
    '#merge_request_title'
  ) as HTMLInputElement;

  const prTitle = from!
    .replace(/(\S+)\W(CU\W\S+)/, '[ $2 ] $1')
    .replace(/\-/g, (match, index) => (index == 4 ? match : ' '));

  titleInput.value = prTitle;
};

const assignToMe = () => {
  const [assignee] = document.getElementsByClassName(
    'dropdown-toggle-text'
  ) as HTMLCollectionOf<HTMLSpanElement>;

  if (assignee.textContent === 'Unassigned') {
    const assignToMe = document.querySelector(
      'a.assign-to-me-link'
    ) as HTMLAnchorElement;

    assignToMe.click();
  }
};

const removeLoading = () => {
  document.getElementById('loading')?.remove();
};

const waitFor = (condition: Function): Promise<boolean> =>
  new Promise((resolve, reject) => {
    let isResolved = false;

    const interval = setInterval(() => {
      if (condition()) {
        isResolved = true;
        resolve(true);
        clearInterval(interval);
      }
    }, 300);

    setTimeout(() => {
      if (!isResolved) {
        clearInterval(interval);
        reject(new Error('Timed out'));
      }
    }, 5000);
  });

const setReviewerToPedro = async () => {
  const [_, reviewer] = document.getElementsByClassName(
    'dropdown-toggle-text'
  ) as HTMLCollectionOf<HTMLSpanElement>;

  reviewer.click();

  const [__, reviewerSearchInput] = document.getElementsByClassName(
    'dropdown-input-field'
  ) as HTMLCollectionOf<HTMLInputElement>;

  reviewerSearchInput.value = 'Pedro Antonio';

  const getReviewerLi = () => {
    const [__, reviewerResultsContainer] = document.getElementsByClassName(
      'dropdown-content'
    ) as HTMLCollectionOf<HTMLDivElement>;

    const [reviewerResults] =
      reviewerResultsContainer?.getElementsByTagName('ul') ?? [];

    const [firstResult] = reviewerResults?.getElementsByTagName('li') ?? [];

    return firstResult as HTMLLIElement | undefined;
  };

  await waitFor(() => {
    const reviewer = getReviewerLi();

    const [reviewerName] = reviewer?.getElementsByTagName('strong') ?? [];

    return reviewerName?.textContent?.includes('Pedro Antonio');
  });

  getReviewerLi()!.getElementsByTagName('a')[0].click();

  removeLoading();
};

(() => {
  showLoading();
  changePRTitle();
  assignToMe();
  setReviewerToPedro();
})();
