b## Week 4 Lab Tasks

> ### Develop a simple bookstore management system, such that:
<br></br>

## Tasks:
1.  It has at least five pages  
    1.  Homepage
    2.  New Book
    3.  List Books
    4.  Invalid Data
    5.  404 (Page not found)
2.  The home page shows a logo (i.e. an image of your choice) at the header of the page.
3.  The home page must have two links to two pages: add a new book and list books (_HINT:  [refer to static assets section](https://www.alexandriarepository.org/module/week-4-advanced-express-js/#staticassetssec)_)
4.  add new book page has a form that sends a POST request to the server with the following items: (_HINT:  [refer to body-parser app](https://www.alexandriarepository.org/module/week-4-advanced-express-js/#bodyparserexp)_)
    -   1.  title
        2.  author
        3.  topic
        4.  cost
    -   The server should not accept a title, topic or an author name with less than 3 characters and a negative cost. If any of the conditions cannot be met, the server should respond with the 'invalid data' page.
5.  If invalid data arrives at the server, the server must respond with the invalid page (fourth page) that shows an error message (or image)
6.  The list book page displays all the employees in a table format (_HINT:  [refer to this app](https://www.alexandriarepository.org/module/week-4-advanced-express-js/#tablerenderingex)_)
7.  change the background of the pages into any colour you prefer using a CSS file (_HINT:  [refer to static assets section](https://www.alexandriarepository.org/module/week-4-advanced-express-js/#staticassetssec)_)
8.  The server should respond with 404 page for any wrong/invalid pathname (i.e. URL). The error message on the 404 page should be an image.
9.  Users must be able to navigate through the app pages using hyperlinks placed in the header of each page.
<br></br>

## Extra Tasks:
> ### Create a new endpoint to list all title of the books
>
<br></br>

## Demo
![demo](./src/public/images/demo.gif)

<br></br>

### Access Locally

Prerequisities:

- Node: https://nodejs.org/en/download/

- npm: https://nodejs.org/en/download/
  

>  **Package used:**
>
>
>  -  [nodemon](https://www.npmjs.com/package/nodemon)
>
>  -  [cors](https://www.npmjs.com/package/cors)
>
>  -  [morgan](https://www.npmjs.com/package/morgan)
>
>  -  [helmet](https://www.npmjs.com/package/helmet)
>  
>  -  [body-parser](https://www.npmjs.com/package/body-parser)
>
>  -  [ejs](https://www.npmjs.com/package/ejs)
>
>  -  [dotenv](https://www.npmjs.com/package/dotenv)
>
To run the app locally, please follow the steps below:

1. Clone the repository
```
https://github.com/KarlokZhang/FIT2095-LabTasks.git

cd Week4_Lab
```
2. Install dependencies
```
npm install
```
3. Run the server
```
npm run dev
```
4. Now access the page at http://localhost:3000