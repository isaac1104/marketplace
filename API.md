# Backend/Database Documentation
 By Minhyeong Joe (https://github.com/minhyeong-joe)
 
 url for backend and database: https://54.215.120.93

## Structure

### Database Structure

- users
  - id=[int] // auto-increasing
  - username=[varchar]
  - password=[varchar] // Will be stored in hashed format;
  - role=[varchar] // default  to "user"
  - email=[text]
  - firstname=[text]
  - lastname=[text]
  - phone=[int];
  - zipcode=[int]
  - image=[varchar] // Name of Image file;
- posts
  - id=[int] // auto-increasing;
  - category=[text]
  - title=[text]
  - author=[text]
  - description=[text]
  - location=[text]
  - image=[varchar] // Name of Image file
  - price=[decimal(.xx)]
  - timestamp=[datetime] // default to current_timestamp;

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

- URL <br/>
/api/users/add.php
- Method <br/>
`POST`
- Data Params <br/>
  - Required:  <br/>
  username=[varchar] <br/>
  password=[varchar] <br/>
  email=[text] <br/>
  firstname=[text] <br/>
  lastname=[text] <br/>
  phone=[int] <br/>
  zipcode=[int] <br/>
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

- URL <br/>
/api/users/auth.php
- Method <br/>
`POST`
- Data Params <br/>
  - Required <br/>
  username=[varchar] <br/>
  password=[varchar] <br/>
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

- URL <br/>
/api/users/delete.php <br/>
- Method <br/>
`POST` <br/>
- Data Params <br/>
  - Required <br/>
  id=[int] <br/>
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

- URL <br/>
/api/users/edit.php <br/>
- Method <br/>
`POST` <br/>
- Data Params <br/>
  - Required <br/>
  password=[varchar] &nbsp; _For password change_  <br/>
  __OR__ <br/>
  email=[text] <br/>
  firstname=[text] <br/>
  lastname=[text] <br/>
  phone=[int] <br/>
  zipcode=[int] &nbsp; _For info change_  <br/>
  - Optional <br/>
  image=[varchar] <br/>
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
_load single post or all posts from database in JSON format __From newest to oldest__._

- URL <br/>
/api/posts/postdata.php <br/>
- Method <br/>
`GET` <br/>
- URL Params <br/>
  - Optional <br/>
  id=[int] <br/>
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

- URL <br/>
/api/posts/add.php <br/>
- Method <br/>
`POST` <br/>
- Data Params <br/>
  - Required <br/>
  title=[text] <br/>
  category=[text] <br/>
  author=[varchar] <br/>
  description=[text] <br/>
  price=[int] <br/>
  location=[text] <br/>
  - Optional <br/>
  image=[varchar] <br/>
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



