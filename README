# Use of Bower, Gulp, NPM, goog.base

Generally I use bower for front-end third party javascript libraries (angular, etc) and NPM for back-end and build process dependencies (Express, gulp, LESS).

Angular development roughly follows [Google's AngularJS style guide](https://google.github.io/styleguide/angularjs-google-style.html), using `goog.provide()` and `goog.require()` for dependency management. Angular injection is declared by @ngInject JSDoc syntax.

All controllers, services, and directives are defined as classes declared on `goog.base` managed namespaces as opposed to anonymous functions.

## Build and Run

Use `npm install` and then `bower install`, followed by `gulp` and `node start`. (You may need to run `npm install -g bower` if `bower install` produced an error, and `npm install -g gulp` if `gulp` didn't work for you).