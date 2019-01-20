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
npm install --save express express-graphql graphql lodash json-server axios nodemon
```

### Start the server

```
npm run dev
```

### Try Graphiql

Some sample root queries below:

Get User with ID '1' as a Root Node.

```
{
  user(id: "1") {
    id
    firstName,
    age
  }
}
```
Get Company with ID '2', and all the related Users, as a Root Node.
```
{
  company(id: "2") { 
  	id
    name
    description	
    users {
      id
      firstName
    }
  }
}
```