
#### Tech-Stack
* Framework: [React.js](https://reactjs.org/)
* CSS Framework: [MATERIAL-UI](https://material-ui.com/)
* Back-end: [NC-News](https://rico-nc-api.herokuapp.com/)

<!-- 
#### TDD 
* Testing Framework: [Jest](https://jestjs.io/) -->
---
### Requirements

* [Node.js](https://nodejs.org/)

## How to install

Clone the repository

```
$ git clone https://github.com/rico157/rico-fake-news.git
```

Install all the node packages with the command:

```
$ npm i
```

Create/recreate the database with the command:

```
$ npm run setup-dbs
```

Insert data to the database with the command:

```
$ npm run seed
```

Start the server with the command:

```
$ npm start
```

Go to [http://localhost:3000/](http://localhost:3000/)





## To Do 
---
- [x] view a list of all articles
- [x] view a page for each topic with a list of related articles.
- [x] view an individual article.
- [x] view an individual article's comments.
- [x] sort articles by:
 - date created
 - comment_count
 - votes
- [x] post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
- [x] delete my own comments (as a default logged in user 'weegembump').
- [x] vote on an article and immediately see the change.
- [x] vote on a comment and immediately see the change.
---
- [x] see a 404 error if I go on a non-existent path/a path for a non-existent article/topic.
- [x] see a 400 error if I go on a invalid article ID.
- [x] not be allowed to post a comment if I have not filled in all of the form boxes.
---
- [x] use the site on my mobile without sacrificing style or functionality (as I may not have my laptop nearby).
- [x] follow the readme instructions to easily run the project locally.
- [x] find a link to the hosted version of the project in the readme. (use a placeholder if not yet hosted!)
- [ ] find a link to the back-end repository of the project in the readme.
- [x] find a link to the hosted version of the back-end project in the readme.
---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
