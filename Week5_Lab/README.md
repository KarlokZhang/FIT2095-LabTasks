## Week Lab Tasks

> ### Develop a simple bookstore management system, such that:
>
> <br></br>

## Tasks:

1.  It should have the ability to add new books, update, delete and list the available books.
2.  It uses MongoDB to store all the entries instead of arrays
3.  Each book must have the following fields:
    1.  title
    2.  author
    3.  topic
    4.  date of publication
    5.  summary
4.  Pages
    1.  add new book: adds a new document (i.e. new book) to the DB
    2.  Get all books: shows all the books in a table format
    3.  Delete all books by a topic: the page takes a topic as input and deletes all documents from the DB for that given topic
    4.  Update a book by title: the page takes a title and all other fields as input. The server must update all the fields for that given title
5.  redirect the client to the get all books page after the insert, update and delete operations.

Prefered Specs:

- Add background to all pages
- Style your pages' links, colours, and fonts.
  <br></br>

### Access Locally

Prerequisities:

- Node: https://nodejs.org/en/download/

- npm: https://nodejs.org/en/download/

> **Package used:**
>
> - [nodemon](https://www.npmjs.com/package/nodemon)
>
> - [cors](https://www.npmjs.com/package/cors)
>
> - [morgan](https://www.npmjs.com/package/morgan)
>
> - [helmet](https://www.npmjs.com/package/helmet)
>
> - [body-parser](https://www.npmjs.com/package/body-parser)
>
> - [ejs](https://www.npmjs.com/package/ejs)
>
> - [dotenv](https://www.npmjs.com/package/dotenv)
>
> - [mongodb](https://www.npmjs.com/package/mongodb)
>
> - [dayjs](https://www.npmjs.com/package/dayjs)
>

To run the app locally, please follow the steps below:

1. Clone the repository

```
https://github.com/KarlokZhang/FIT2095-LabTasks.git

cd Week5_Lab
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
