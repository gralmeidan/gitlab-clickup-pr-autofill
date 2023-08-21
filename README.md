# gitlab-clickup-pr-autofill

Takes the Task ID and Task Name from the Branch Name, fills the title of the PR with it and assigns it to you.

It's a simple task but I was tired of doing it manually.

## Running the app

1. `npm install`
2. Create distributable files using `npm run build`

> For firefox, run `bun adapt-to-firefox.bun.js`

3. Open chrome://extensions/
4. Enable Developer Mode
5. Click `Load Unpacked`
6. Point to the `dist` folder
