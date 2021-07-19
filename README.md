## Introduction
Technical leveling challenge in NodeJS using good code versioning practices, documents, installation and use instructions, quality of structure, project architecture and configuration, REST API, features, non-mandatory requirements, code quality, good programming practices and testing guarantee.

### Running on native machine
1. Install the dependencies with `npm install`
2. Run the application in development mode with `npm run dev`
3. Access `https://localhost:4000/api` and you're ready to go!

## Scripts
This boilerplate comes with a collection of npm scripts to make your life easier, you'll run them with `npm run <script name>`:
- `dev`: Run the application in development mode
- `test`: Run the test suite
- `test:unit`: Run only the unit tests
- `test:features`: Run only the features tests
- `lint-fix`: Lint the codebase

## Models
For this challenge, three relationship entities were created:
1. `state`: State or district belonging to a country. 
    - `code`: They serve to differentiate one state from another.
    - `uf`: Federative Unit and is the distribution of the states that make up the federation as a whole.
    - `name`: Name given to a state of the federation.
2. `city`: City that makes up a state. A group of cities form a state.
    - `code`: They serve to differentiate one city from another.
    - `code_state`: It is used to identify which state this location belongs to.
    - `name`: Name given to a city in the state.
3. `client`: Person who will be registered in the system.
    - `name`: Customer's full name.
    - `gender`: Gender that the person is.
    - `cpf`: Proof of Registration Status
    - `birth_date`: Date the client was registered when the birth certificate was made.
    - `code_city`: Code of the city where the customer is being registered.

### Docs
Docs (Swagger/OAS 3.0) are at `http://localhost:[PORT]/api/docs`

## Tech
- [Node v14.16+](http://nodejs.org/)
- [Express](https://npmjs.com/package/express)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Awilix](https://www.npmjs.com/package/awilix)
- [Joi](https://www.npmjs.com/package/joi)
- [HTTP Status](https://www.npmjs.com/package/http-status)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)
- [ESLint](https://www.npmjs.com/package/eslint)