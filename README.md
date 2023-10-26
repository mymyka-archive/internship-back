## Installation

```bash
$ npm install
$ cp .env.sample .env
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

## Running with Docker
```
docker build -t internship-back .
docker run -p80:3000 internship-back
```

## Open
```
http://localhost:3000/
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Test with Docker
```
docker build -t internship-back-test -f Dockerfile.test .
docker run internship-back-test
```