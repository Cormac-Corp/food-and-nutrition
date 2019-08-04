# API Documentation
This is the API Documentation for the Food and Nutrition Public API. This page covers all methods accessible from the API.

If you head over to [http://ec2-3-89-177-3.compute-1.amazonaws.com/playground](http://ec2-3-89-177-3.compute-1.amazonaws.com/playground), you can also view all the methods and their arguments by clicking the Docs button

There are no subscriptions for this API
> Note: For certain methods, you must be authenticated. For the methods that need to be authenticated, it will show whether you need to be authenticated or not.

## Queries
All queries
### getAllConditions
Must be authenticated
1. No arguments
2. No fields to select

Returns a list of strings that show all the conditions that you can select for the getCondition query.
### getCondition
Must be authenticated
Described in the homepage.
### me
Must be authenticated

Returns the user's data. No operation arguments
##### Data
```graphql
{
  _id
  name
  email
}
```
##### Fields to select
```graphql
{
	_id
  name
  email
}
```
## Mutations
All mutations
### addUser
Creates a new user
##### Arguments
```
{
	data: {
    	name:String,
        email: String,
        password: String
	}
}
```
##### Data
```graphql
{
user {
	_id
  name
  email
}
token
}
```
### login
Login a user
##### Arguments
```
{
	data: {
    	email: String,
        password: String
    }
}
```
##### Data 
```graphql
{
user {
	_id
    name
    email
}
token
}
```
### logout
Must be authenticated

Logout a user.
No operation arguments or data.
Returns `200` if successful
### logoutAll
Logout a user from all devices

Must be authenticated 

No operation arguments or data. Returns `200` if successful.
