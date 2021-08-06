# FIT2095 Lab Task Week 3

> ## You are required to build a web application that represents a bookstore management system.
<br><br/>

## Specification are:

*  The database is implemented as an array of items (books)
*  It uses Express.js as a middleware
*  Each item (book) has five attributes: id, title, author, topic,price
*  the id for the new items is auto-generated.
    * HINT: use Math.random() method.
    * Example: let newId= Math.round(Math.random()*1000)
* it offers the following operations:
    * add a new book to the bookstore through the URL.
        * E.g: http://localhost:8080/addbook?title=’HarryPotter’&author=’J.K.Rowling’&topic=fiction&cost=15
        * Object {id:789, name:’TV’, count:15,cost:1750} should be saved in the database
    * List all books
        * The output should have five columns: id, title, author, topic, cost
            * HINT: use function **generateList** as a reference
            * URL: http://localhost:8080/getallitems
    * delete a book by id
            * URL: http://localhost:8080/deleteid/938, where 938 is the id of the book that should be deleted
    * get bookstore total value:
            * URL: http://localhost:8080/getbookstorevalue
            * where the bookstore value is equal to ∑n0book.price for all n items in the array DB
<br></br>

**Bonus:  use express.Router() to separate the routes in a different file.**
<br></br>

## Access Locally

### Prerequisites:

- Node: https://nodejs.org/en/download/

- npm: https://nodejs.org/en/download/

> **Package used:**
>
> - [nodemon](https://www.npmjs.com/package/nodemon)
> - [cors](https://www.npmjs.com/package/cors)
> - [morgan](https://www.npmjs.com/package/morgan)
> - [helmet](https://www.npmjs.com/package/helmet)
>


To run the app locally, please follow the steps below:

1. Clone the repository
```
https://github.com/KarlokZhang/FIT2095-LabTasks.git
cd Week3_Lab
```
2. Install dependencies
```
npm install
```
3. Run the server
```
npm run dev
```
4. Now access the page at http://localhost:8080




