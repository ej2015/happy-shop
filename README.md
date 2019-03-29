# Happy Shop

A simple SPA for an online shop

## Setup

This app uses:
* Backend: Rails5 API mode
* Admin: ActiveAdmin
* Frontend: ReactJS, Redux
* Database: PostgreSQL
* Deployment: Heroku


## Usage

The front end app is located inside /client. In development, you can use 
```
rake start
```
to start both Rails and React. This script uses Heroku CLI. If you don't have Heroku installed, you can start the apps separately:
```
PORT=3000 npm start --prefix client
PORT=3001 bundle exec rails s
```

You may run seed to setup test data. In development, you can access admin portal at localhost:3001/admin. In production, you can access it at /admin.  
