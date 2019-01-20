# Setup a new application
### Install npm / node
On a Mac we can use brew
```
brew install node
```
### Initalize a new npm based app
We use npm to initialize a new application in the current directory
```
npm init
```
### Install application dependencies
We use npm to install dependencies
```
npm install --save express express-graphql graphql lodash json-server axios
```

### Start the server

```
node server.js
```