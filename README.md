# MOJ Common Platform Bootstrap/AngularJS UI Module #

## Introduction


## Dependencies
Requires Node & Yoeman

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install angular components generator: `npm install -g generator-angular-component`


### Build
To build the dist files use `grunt build` this will merge the demo files of each component and create the distributed version files.
Using `grunt` on it's own will run tests and build the project.

### Tests
Use `grunt test`

[Unit Testing Best Practices in AngularJS](http://andyshora.com/unit-testing-best-practices-angularjs.html)

### How to create a new component
To create a new component you need to ensure you have yeoman.io installed (`sudo npm install -g yo`) and have the **angular-components** generator installed.

`yo angular-components:component <name>`
