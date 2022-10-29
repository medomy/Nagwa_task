# Nagwa task words test frontend

this is the frontend part of task.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## routes

- Home route : contains a sign in form to capture a desired username of user and an option to continue as visitor
```http
  http://localhost:3000
```
- test route : contains the brgin test button and client can do their test 
```http
  http://localhost:3000/test
```
- rank route : contains the rank page with a button to redo the test , if accessed before the finish of test you will be redirected
```http
  http://localhost:3000/rank
```
- 404 error page from any othe route


