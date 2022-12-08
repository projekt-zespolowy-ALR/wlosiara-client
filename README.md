# wlosiara.pl - Website

This repository contains the source code of a website wlosiara.pl where hair care enthusiasts can find information about interesting products, tips, reviews and more.

SvelteKit with TypeScript is used as a framework.

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

### Check syntax and types

You should check if your code even "compiles". To do so, run:

```bash
npm run svelte:check
```

Despite the script name, it also checks for [TypeScript](https://www.typescriptlang.org) errors ([SvelteKit](https://kit.svelte.dev) does it under the hood).

### Run tests

The code is tested using [Vitest](https://vitest.dev).
To run the tests, run:

```bash
npm run vitest:check
```

Code coverage is provided by [c8](https://github.com/bcoe/c8).
After running the tests, you can see the coverage report by opening `coverage_report/index.html` in your browser.
