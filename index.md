## Welcome to the Food and Nutrition Public API

### Accessing the API
If you want to run queries to the API, go to [http://ec2-3-89-177-3.compute-1.amazonaws.com/playground](http://ec2-3-89-177-3.compute-1.amazonaws.com/playground). This takes you to GraphQL Playground, an in-browser IDE for running GraphQL Queries

If you are trying to build a frontend (like Apollo Client) or something that makes calls to the API programmatically, the endpoint is [http://ec2-3-89-177-3.compute-1.amazonaws.com/graphql](http://ec2-3-89-177-3.compute-1.amazonaws.com/graphql)

### Creating a user
In order to fetch data from the API, you must be authenticated. To get a token, you first have to create an account, to create a user account, run the following query

```graphql
mutation {
  addUser(data: {
    name:"Username",
    email:"name@example.com",
    password:"password"
  }) {
    user {
      _id
    }
    token
  }
}
```
This will return the following result, including the token, which is needed
to authenticate requests
```json
{
  "data": {
      "addUser": {
        "user": {
          "_id": "5245b4d5debdeedc67d3f833"
        },
        "token": "eyJhbGciOeJIUzI1NiIsInR5cCI6IkpXVCf9.eyJfdWQiOiIsZDQ1YjRkNTllYmRlZTBjNjdkMzk4MzMiLCJpYXQiOjE1NjQ4NDkzNjs9.Li_s6ZL6Bs__buQiuUcDU4FBgTcpu7dpN1CaStBONhk"
    }
  }
}
```
Each time you make a request to the api, you need to create an HTTP Header called `Authorization` (exactly as shown). For the value, you should have a string that starts with bearer `Bearer` (with an extra space) and put your token after it.

So, if you are in the GraphQL Playground, you would click the button that says `HTTP Headers`  and in it, you would put the following json:
```json
{
	"Authorization":"Bearer (token goes here)"
}
```
> Note: The whitespace between `Bearer` and your token is important.

Now you have created a user and and you are authenticated. You can now fetch data from the API

### Fetching Data
There are two queries that you can use to fetch data from the API. Both of them require you to be authenticated.

View the API Documentation to see more methods
#### getCondition (Must be Authenticated)
Make sure your token is in the HTTP Header tab as shown above. To use this method, you can run the following query below:
```graphql
query {
  getCondition (data: {
    condition: "Blood Pressure",
    zip:"21042"
  }){
    name
    zip
    address
    herbs
    products {
      name
      available
    }
  }
}
```
### Logging Out
Once you are done using the API, you will want to logout. The proess is very simple. You must be authenticated for this by checking your HTTP Headers for your token. In order to logout, run the following mutation

```graphql
mutation {
	logout
}
```
If this successfully fires and logs you out, you will get a 200 status code. Also your token will no longer work.
## All Methods
To see the all the methods you can run, visit the API Documentation.
