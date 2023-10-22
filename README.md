# https://wlosiara.pl/ - Website

This repository contains the source code of a website wlosiara.pl where hair care enthusiasts can find information about interesting products, tips, reviews and more.

SvelteKit with TypeScript is used as a framework.

![image](https://github.com/projekt-zespolowy-ALR/wlosiara-pl-website-service/assets/58569359/75aee037-a9e6-4ace-99d9-4765afab8c25)
![image](https://github.com/projekt-zespolowy-ALR/wlosiara-pl-website-service/assets/58569359/15762e9a-f6fd-4f2b-a9c8-a79544a82886)
![image](https://github.com/projekt-zespolowy-ALR/wlosiara-pl-website-service/assets/58569359/21c007f8-c9a8-4371-a90a-58b6d399a03f)

# Local development

## Requirements

Install the requirements using npm:

```bash
npm ci
```

## Run

Run the development server:

```bash
npm run dev
```

## Build and preview the production version

Build the production version:

```bash
npm run build
```

To view the built website, run:

```bash
npm run preview
```

This will spin up a local server hosting the website.

## Before committing

There are some checks defined in the repository pipeline that run when you push your changes. You should make sure your code passes those checks before committing.

You can find some of the checks quite strict, but every check improves the quality of the code and makes it easier to maintain.

### Check formatting

The code is formatted using [Prettier](https://prettier.io).
To check if your code is formatted correctly, run:

```bash
npm run prettier:check
```

To automatically format your code, run:

```bash
npm run prettier:fix
```

### Check linting

The code is linted using [ESLint](https://eslint.org).
To check if your code is linted correctly, run:

```bash
npm run eslint:check
```

To automatically fix linting errors (if possible), run:

```bash
npm run eslint:fix
```

### Check Dockerfile linting

The Dockerfile is linted using [dockerlinter](https://www.npmjs.com/package/dockerlinter).
To check if your Dockerfile is linted correctly, run:

```bash
npm run dockerlinter:check
```

### Check syntax and types

You should check if your code even "compiles". To do so, run:

```bash
npm run build:check
```

### Run tests

The code is tested using [Vitest](https://vitest.dev).
To run the tests, run:

```bash
npm run vitest:check
```

Code coverage is provided by [c8](https://github.com/bcoe/c8).
After running the tests, you can see the coverage report by opening `coverage_report/index.html` in your browser.
