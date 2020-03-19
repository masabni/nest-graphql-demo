## Nest & Graphql Demo

This a demo app made with nestjs and graphql. You can find it online [here](https://).
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Graphql query examples
You can try those query examples in the graphql playground (http://localhost:3000/graphql) 
```bash
mutation{
  createAuthor(data: {
    name: "john doe",
    email: "jhondoe@gmail.com",
    phone: "+118437432",
  }) {id name email phone}
}
```
```bash
{
  authors {
    id
    name
    email
    phone
    books {
      title
    }
  }
}
```
```bash
{
  author(id: "author_id") {
    id
    name
    email
    phone
    books {
      title
    }
  }
}
```
```bash
mutation{
  createBook(input: {
    title:"summer",
    type: "sci-fi",
    author:"5e72869e6db5bf2a845056f6",
    publish_year: 2010
  }) {title type publish_year author {name}}
}
```
```bash
{
  books {
    id
    title
    type
    author {
      name
      email
    }
    publish_year
  }
}
```
```bash
{
  book(id: "book_id") {
    title
    type
    author {
      name
      phone
      email
    }
    publish_year
  }
}
```


