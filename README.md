Team:
  Product Owner: Sara Sailors
  Development Team: Katie Barnes, John Jung
  Scrumlord: Canh Trinh

Team Name: Legacy-Owls

Project: 
  - To take the existing visual news app and add features 

What's in this repo?

* Client: 
  - frontend based on Angular framework
      - App sub-folers
          - auth: login, registration page
          - comment: side-window that pops up when comment button is clicked
          - factory_function: houses main factories for frontend logic
          - latest: main page with all new articles loaded. main landing page after 
            auth is complete
          - modal: popup triggered by a button that displays more information about the clicked article
          - savedStory: page rendered that downloads a user's saved articles from the database
          - trending: page rendered that downloads all "liked" articles for all users
  - SASS directory that controls styling. CSS directory is automatically compiled
    after GULP is run, i.e. not touched manually!

* Client_old:
  - Client files written by the old team, written in React
  - Kept intact within the project reposity in case there is desire to switch back to React

* Server:
  - models: 
      - articleModel.js is the schema sketched to design articles that are saved to the "liked" or "
        "comment" database
      - userModel.js is schema sketched for users. note the empty array for savedStories. when a user
        saves a story, an article is pushed to this array
  - routes:
      - articleRoutes: endpoints for GET and POST requests to "like" and "comment on" articles
      - auth: routing logic for authorization
      - newsRoutes: GET request for external NYT API
  - db.js: connects to Mongo database
  - server.js: 
      - includes required backend node modules, necessary middleware, and endpoints to connect to 
        connect to the database

Installing dependencies and Getting Started

- run “npm install” - all node dependencies are listed in package.json
- In a separate tab in the terminal, run “mongod” to start mongo up
- In a separate tab in the terminal, run “gulp” to start our server and app