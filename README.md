# Hackerbay-backend-challenge

## Getting Started

These instructions will make you run this API locally on your computer fortesting purposes.

### Prerequisites

What you need to install the software and get started.

```
- Node.js: A platform on which the application will be running.
- npm: a package manager for Node.js used to install project dependencies.
```

### Installation

Clone the repository by typing the following command in your terminal to clone the repo.

```
git clone https://github.com/barema4/backend-challenge.git
```

#### Development setup

- Install dependencies.
  ```
  npm install
  ```
- Run the application
  ```
  npm start
  ```
- Access the api Endpoints through port `8000` on `localhost`

| End Point             | Verb  | Use                                          |
| --------------------- | ----- | -------------------------------------------- |
| `/login`              | POST  | Login a user with the right credentials      |
| `/update`             | PATCH | Update the user object using `JSON patch`    |
| `/generate-thumbnail` | POST  | Generate a thumbnail from a public image uri |

- You can also be able to test out the api through swagger api documentation by running the below link in the browser when the application server is on

```
http://localhost:8000/docs
```

- To login and get an access token you will use the following credentials

```
{
 "userName": "Rubarema",
 "password": "1qaz2wsx"
}
```
## Running the tests

- To run the tests, run the following command in your terminal.

```
npm run test
```
