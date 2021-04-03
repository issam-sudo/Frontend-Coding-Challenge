# FrontendCodingChallenge
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4

## Link : https://issam-sudo.github.io/Frontend-Coding-Challenge/

## Libraries

### Bootstrap grid system uses a series of containers, rows, and columns to layout and align content
Installing Bootstrap from NPM (For Bootstrap 4) : npm install bootstrap 
add "./node_modules/bootstrap/dist/css/bootstrap.min.css" in angular.json

### Angular Material implementation of Google's Material Design
Install Angular Material Use the Angular CLI's :  ng add @angular/material


### ngx-spinner Show/Hide spinner from template waits for API response
Installing ngx-spinner from NPM :  npm i ngx-spinner
(https://napster2210.github.io/ngx-spinner/)

### rxjs Reactive programming compose asynchronous and callback-based code

### Angular PWA for Progressive Web Apps
Add @angular/pwa package : ng add @angular/pwa
Additionally, it adds ngsw-config.json and manifest.webmanifest for configuration purposes. Also, it modifies angular.json, package.json, index.html and app.module.ts .

### gh-pages Deploy this application to Github
create a prod build using ng build --prod and then deploy that distribution on the cloud 
predeploy : ng build --prod
deploy : npx gh-pages -d dist/frontend-coding-challenge

application will be deployed to https://username.github.io/repository-name/ page. In my case, it deployed to https://issam-sudo.github.io/Frontend-Coding-Challenge/

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
