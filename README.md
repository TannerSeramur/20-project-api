![CF](http://i.imgur.com/7v5ASc8.png) LAB 20
=================================================

## API Project: Lab 20

### Author: Siobhan Niess, Tanner Seramur, Michael George, and Ryan Gallaway

### Links and Resources
* [repo](https://github.com/TannerSeramur/20-project-api)
* [travis](https://www.travis-ci.com/TannerSeramur/20-project-api)
* [back-end](https://arcane-stream-11193.herokuapp.com/)

#### Documentation
* [swagger](http://xyz.com)
* [jsdoc](http://xyz.com)

### Modules
#### `v1.js`
#### `routes.js`
#### `roles-model.js`
#### `middleware.js`
#### `users-model.js`
#### `app.js`
#### `index.js`
##### Exported Values and Methods

#### Feature Tasks -- Server
* Use the `async/await` pattern where possible instead of promises for all asynchronous actions
* Multiple Models supported using a dynamic model loader
* Single API to work with all models for basic CRUD operations
* API Routes to be protected with the proper permissions based on user capability
  * `app.get(...)` should require the `read` capability
  * `app.post(...)` should require the `create` capability
  * `app.put(...)` should require the `update` capability
  * `app.delete(...)` should require the `delete` capability

### Setup
#### `.env` requirements
* `PORT` - Port 3000
* `MONGODB_URI` - MONGODB_URI=mongodb://localhost:27017/lab20

#### Running the app
* You will need to have `mongo` running in one of your terminals
* In another terminal run `nodemon`
* In a third terminal you are going to be using to run your commands
  * in the 3rd terminal you will want to create your users by `echo '{"username":"username","password":"password"} | http post :3000/signup`
  * then to sign into your account you will run `http post :3000/signin -a username:password`
  
#### Tests
* npm test
<!-- * What assertions were made?
* What assertions need to be / should be made? -->