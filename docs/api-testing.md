# Task 3: API Testing

## Overview

This project is a high-level design for a test automation framework built with [Playwright](https://www.playwright.dev/) and TypeScript, created to provide a robust, modular, and scalable testing solution.

The framework has been developed as part of a technical assessment for [Qustodio](https://www.qustodio.com/) to test some API components from [Petstore API](https://petstore.swagger.io/), and demonstrate my envision of the framework's structure focusing on simplify automated testing processes with reusable components, straightforward configuration, and easy maintenance.

## Table of Contents

- [Why this solution?](#why-this-solution)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Running Tests](#running-tests)

## Why this solution?

In order to implement this solution, I have chosen Playwright framework and have also made use of some design best practices. Here are the key reasons to take those decisions:

### Playwright framework

- **Cross-browser & cross-platform:** Supports Chromium, WebKit, and Firefox on Windows, macOS, and Linux.
- **Multi-language support:** Works with JavaScript, TypeScript, Python, Java, and .NET.
- **Fast & reliable:** Headless mode, auto-waiting, and parallel execution reduce flakiness.
- **Better "auto-wait" mechanism:** Playwright automatically waits for elements to appear in the DOM, for animations to complete, and for AJAX requests to finish, making tests less prone to timing. This auto-waiting helps reduce the need for explicit waits and retries, making tests generally more stable.
- **Powerful APIs:** Network interception, visual testing, and built-in debugging tools.
- **Efficient session handling:** Multiple isolated browser contexts in a single instance.
- **Advanced selectors:** Supports CSS, XPath, role-based locators, and auto-retries.

### Best practices

- **Readability and Modularization:** There is a clean separation between the test code and API-specific code, making the scenarios easier to understand.
- **Reusability:** Tests are parametrized so you can use different test data in the future and won’t need to write a new method from scratch. Also you can reuse this methods for new tests, avoiding code duplication.
- **Ease of maintenance:** The tests use the methods from `api-helpers` file whenever they need to interact with the API under test. The benefit is that if the API changes, the tests themselves don’t need to change, only the code within the `api-helpers` needs to change. Therefore, all changes to support that new API are located just in one place. Also dynamic parameters are used instead of hardcoded values, which makes the tests easier to maintain.

## Prerequisites

To use this project, ensure you have the following installed:

- **Node.js** (v18.x or above)
- **npm** (v10.x or above)  
- **Playwright** (v1.50.x or above)

## Installation

To set up this framework locally, clone the repository and install dependencies:

```bash
git clone https://github.com/peter-rr/qustodio-qa-challenge.git
cd qustodio-qa-challenge
npm install
```

## Project structure

```bash
|-- qustodio-qa-challenge/
    |-- tests/                              # Test files organized by feature
        |-- testsForAPIAutomation.spec.ts
    |-- utils/
        |-- api-helpers.ts                  # Helper functions for some API operations
        |-- test-data.ts                    # Test data for reusable cases (JSON format)
|-- playwright.config.js                    # Playwright configuration file
|-- package.json                            # Project dependencies and scripts
|-- README.md                               # Project documentation
```

## Usage

The package exposes one test file located in `tests/` folder:

- `testsForAPIAutomation.spec.ts`: contains the API automation tests to verify the the functionalities of adding and updating a pet in the [Petstore API](https://petstore.swagger.io/). See code: [tests/testsForAPIAutomation.spec.ts](tests/testsForAPIAutomation.spec.ts)

If you want to go deeper into the interactions with the API, you can find all the helper functions and test data under `utils/` folder.

## Running tests

### Running All Tests

To execute all tests in the project:

```bash
npx playwright test
```

To run the tests in a specific browser (e.g., Chrome):

```bash
npx playwright test —project=chrome
```

By default, we will launch the browser selected in headless mode during `playwright test`. To run Chrome headed, you can pass the `--headed` argument to `playwright test`.

### Running Tests in Interactive Mode

Launch Playwright in interactive mode for local testing and debugging:

```bash
npx playwright test —ui
```
