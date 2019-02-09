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

### Start the JSON RESTful server & the dev server

```
npm run json:server
npm run dev
```

### Try Graphiql

Open the [GraphiQL App](http://localhost:4000/graphql) in your browser and try some of the sample root queries below:

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
Get User with ID '1', with the Company they belong to, as a Root Node.
```
{
  user(id: "1") {
    id
    firstName,
    age
    company {
      id
      name
    }
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

Crazy nesting is possible (although not terribly useful!):

```
{
  company(id: "1") { 
  	id
    name
    description	
    users {
      id
      firstName
      age
      company {
        name
        users {
          firstName
          company {
            name
          }
        }
      }
    }
	}
}
```

Named Queries

```
query findCompany {
  company(id: "1") { 
        id
        name
        description	
	}
}
```

Nameded results and multiple similar fetches

```
{
  apple: company(id: "1") {
    id
    name
    description
  },
  google: company(id: "2") {
    id
    name
    description
  }
}
```
Query Fragments help to reduce duplication:
```
{
    apple: company(id: "1") {
		...companyDetails
  },
    google: company(id: "2") {
		...companyDetails
  }
}

fragment companyDetails on Company {
  id
  name
  description
}

```

Mutations 

A mutaton to add a new User.

```
mutation {
  addUser(firstName: "Dadou", age: 99) {
    id
    firstName
    age
  }
}
```