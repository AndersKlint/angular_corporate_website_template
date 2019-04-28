# Corporate Website Template
A website template for your corporate or consulting web site.
A live demo can be found [here](https://andersklint.github.io/angular_corporate_website_template).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Setup
If you're on windows I recommend installing the ubuntu filesystem for windows, to gain access to a linux based terminal.

1. Install NodeJS, npm, and Angular if you haven't already.
2. Clone or fork the repo to your own github account, preferably. Else, just download the repo locally.
3. Navigate to the project directory in the terminal (the folder with angular.json, src, node_modules, etc.)
4. Run the command: "npm update". This will download all dependencies for the project.
5. Then just run "ng serve -o" everytime you want to start the web server.

## Deploy to Github Pages
Edit the script update_git_pages.sh with your own github data, and then just run it to deploy a public website.
If you're not on a linux based filesystem, just look at the commands in the script and copy them to the terminal
sequentially.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
