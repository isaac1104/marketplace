# Backend/Database Documentation
 By Minhyeong Joe (https://github.com/minhyeong-joe)
 
 url for backend and database: https://54.215.120.93

## Structure

### Database Structure

- users
  - id : int(11); auto-increasing;
  - username : varchar(255);
  - password : varchar(255); Will be stored in hashed format;
  - role : varchar(255); default  to "user";
  - email : text;
  - firstname : text;
  - lastname : text;
  - phone : int(11);
  - zipcode : int(11);
  - image : varchar(255); Name of Image file;
- posts
  - id : int(11); auto-increasing;
  - category : text;
  - title : text;
  - author : text;
  - description : text;
  - location : text;
  - image : varchar(255); Name of Image file;
  - price : decimal(19,2);
  - timestamp : datetime; default to current_timestamp;

### Folder Structure


```
.
└── api
     ├── config
     |     └── database.php
     ├── users
     |     ├── add.php
     |     ├── auth.php
     |     ├── delete.php
     |     └── edit.php
     ├── posts
     |     ├── postdata.php
     |     ├── add.php
     |     ├── delete.php
     |     ├── edit.php
     |     ├── search.php
     |     └── filter.php
     ├──
     ├──
     └──
     
ex) to call post data JSON, the url would be: https://54.215.120.93/api/posts/postdata.php
```

## Usage

### Users

#### Add User
_Register new user and info to the user database_

- URL
/api/users/add.php
- Method
`POST`
- Data Params
  - Required: 
  username=[varchar]
  password=[varchar]
  email=[text]
  firstname=[text]
  lastname=[text]
  phone=[int]
  zipcode=[int]
- Success Response
```
data:{
  success: true
}
```
- Error Response
```
data: {
  success: false,
  error: true,
  msg: "Username is already taken." || "Email is already in use." || "Phone Number is already in use."
}
```
- Example
```
// ex: take values from user register form
var form_data = {
      username : $('#username').val(),
      password : $('#password').val(),
      email : $('#email').val(),
      firstname : $('#firstname').val(),
      lastname : $('#lastname').val(),
      phone : $('#phone').val(),
      zipcode : $('#zipcode').val()
    }
    
$.ajax({
  url:'https://54.215.120.93//api/users/add.php',
  type: 'POST',
  contentType : 'application/json',
  data : JSON.stringify(form_data)
})
.done(function(data){
  console.log(data);
});
```

#### Authentication
_Logging in user by verifying username and password combination_

- URL
/api/users/auth.php
- Method
`POST`
- Data Params
  - Required
  username=[varchar]
  password=[varchar]
- Success Response
```
data: [
  {
    username:[username]
    firstname:[firstname]
    .
    .
    .
    // returns corresponding user data
  }
]
```
- Error Response
```
data: {}
// nothing is returned if authentication fails.
```
- Example
```
var loginForm = {
      username: $('#username').val(),
      password: $('#password').val()
    };
    
$.ajax({
      url: 'https://54.215.120.93/api/users/auth.php',
      type: 'POST',
      contentType : 'application/json',
      data : JSON.stringify(auth),
    })
    .done(function(data) {
      if (data) {
        console.log(data);
	       // logging in action here (such as directing to homepage with session/cookie)
      } else {
        console.log("authentication failed...");
      }
    });
```

#### Delete a user
_Delete a user from database using user id_

- URL
/api/users/delete.php
- Method
`POST`
- Data Params
  - Required
  id=[int]
- Success Response
```
data: {
  success: true
}
```
- Error Response
```
data: {
  success: false,
  error: true,
  msg: "id does not exist"
}
```
- Example
```
var id = $('#delete-user-id').val();

$.ajax({
        url: 'https://54.215.120.93/api/users/delete.php',
        type: 'POST',
        contentType : 'application/json',
        data : JSON.stringify( {id} )
      })
      .done(function(data) {
        console.log(data);
      })
```

#### Edit User
_Update __either__ user's first name, last name, email, phone number, and zip code __or__ user's password_

- URL
/api/users/edit.php
- Method
`POST`
- Data Params
  - Required
  password=[varchar]  _For password change_
  __OR__
  email=[text]
  firstname=[text]
  lastname=[text]
  phone=[int]
  zipcode=[int]  _For info change_
  - Optional
  image=[varchar]
- Success Response
```
data: {
  success: true
}
```
- Error Response
```
data: {
  success: false,
  error: true,
  msg: "Email is already in use." || "Phone Number is already in use."
}
```
- Example
```
var updateForm = {
  email="newemail@email.com",
  firstname="newFirstname",
  lastname="newLastname",
  phone=1234567890,
  zipcode=12345
}

$.ajax({
        url: 'https://54.215.120.93/api/users/edit.php',
        type: 'POST',
        contentType : 'application/json',
        data : JSON.stringify(updateForm)
      })
      .done(function(data) {
        console.log(data);
      })

```

### Posts

#### Display Post(s)
_load single post or all posts from database in JSON format __From newest to oldest__ _

- URL
/api/posts/postdata.php
- Method
`GET`
- URL Params
  - Optional
  id=[int]
- Success Response
```
data: [
  "0": {
    "id": "2",
    "category": "electronics",
    "title": "Stolen iPhone X for Sale",
    "author": "isaac-test1",
    "description": "I stole this brand new iPhone from the Apple Store.\r\n64GB Gold",
    "location": "Irvine, CA",
    "image": "",
    "price": "500.00",
    "timestamp": "2018-01-24 21:14:45"
  },
  "1": {
    "id": "1",
    "category": "furniture",
    "title": "Bed Frame",
    "author": "Billy",
    "description": "Brand new bed frame\r\nQueen Size",
    "location": "Buena Park, CA",
    "image": "",
    "price": "65.00",
    "timestamp": "2018-01-22 00:18:50"
  },
  .
  .
  .
  "results": 5  // This is the count of total posts in database
]
```
- Error Response
```
data: {}
// Returns nothing if there's no post in the database
```
- Example
```
// To call all posts
$.ajax({
  url: "https://54.215.120.93/api/posts/postdata.php"
})
.done(function(data) {
  if (data) {
    console.log(data);
  } else {
    console.log("There is no post available");
  }
});

// To call single post

var id = 1;

$.ajax({
  url: "https://54.215.120.93/api/posts/postdata.php?id="+id
})
.done(function(data) {
  if (data) {
    console.log(data);
  } else {
    console.log("There is no such post with id=1");
  }
});
```

__NOTE: When rendering description. Use `<pre></pre>`(tag) OR `white-space: pre`(Style) to render new line break correctly.__

#### Add a Post
_Add a post_

- URL
/api/posts/add.php
- Method
`POST`
- Data Params
  - Required
  title=[text]
  category=[text]
  author=[varchar]
  description=[text]
  price=[int]
  location=[text]
  - Optional
  image=[varchar]
- Success Response
```
data: {
  success: true
}
```
- Error Response
```
data: {
  success: false,
  error: true
}
```
- Example
```
var form_data = {
      title : $('#title').val(),
      category : $('#category').val(),
      author : $('#author').val(),
      description : $('#description').val(),
      price : $('#price').val(),
      location : $('#location').val()
    }
    
$.ajax({
  url:'https://54.215.120.93//api/posts/add.php',
  type: 'POST',
  contentType : 'application/json',
  data : JSON.stringify(form_data)
})
.done(function(data){
  console.log(data);
});
```



