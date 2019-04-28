# Corporate Website Template
A website template for your corporate or consulting website.
A live demo can be found [here](https://andersklint.github.io/angular_corporate_website_template).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4, and uses [Angular Material](https://material.angular.io/) and [Material Design for Bootstrat 4](https://mdbootstrap.com/) for styling.

## Screenshot
![home-page](https://raw.githubusercontent.com/andersklint/angular_corporate_website_template/master/screenshots/home-page.jpg)

## Setup
If you're on Windows I recommend installing Ubuntu filesystem for Windows, to gain access to a Linux based terminal.

1. Install NodeJS, npm, and Angular if you haven't already.
2. Clone or fork the repo to your own github account, preferably. Else, just download the repo locally.
3. Navigate to the project directory in the terminal (the folder with angular.json, src, node_modules, etc. in it)
4. Run the command: "npm update". This will download all dependencies for the project.
5. Then just run "ng serve -o" everytime you want to start the web server.

## Editing the code
Most of the css is global, since it's used by many different components. This code can be found in styles.css. Remember that component specific css overwrites the global one.

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
