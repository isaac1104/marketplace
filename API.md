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
