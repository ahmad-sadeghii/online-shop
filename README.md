<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A very simple online shop app written with NestJS, Typescript, TypeOrm and GraphQL</p>
## Description

## Installation
Clone this repository and run the following code to install all dependencies:
```bash
$ npm install
```

## Running the app
In order to run the app, you should copy ``.env.example`` to ``.env`` and fill the correct values of your PostgreSQL details.

After that, you can run either of commands below:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
After running the app, navigate to ``http://localhost:3000/graphql`` and write GraphQL queries and mutations in GraphQL Playground.