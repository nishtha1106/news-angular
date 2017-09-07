<<<<<<< HEAD
# Newsangular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
The News App Case Study
Source - https://newsapi.org/
if you want, you can use google news api
News app should be responsive.


> Sprint 1
- The home page of application should contain search text box and search button.
- The user can type name of the news channel in the search box and hit the search button.
- Search button will search all news related to the particular channel.
- If user clicks search button without entering any value in search text box, then a error message should be shown to the user.
- Display the news related details like headlines, poster, video etc. with “Add “button, underneath the search box.
- As soon as User click on add button the news needs to be added into a Favorite List.
- If news will be more than 10 then pagination will be used to navigate all news.
- If news is already exist, then it should not be added into the database.
- Write test cases for front and backend.


> Sprint 2
- Create a Nav bar that should contain 2 links.
    a) Search.
    b) Display Favorites.
- When User click on 'Display Favorites' menu, User will be able to see all the news added into Favorite List.
- Create a Delete and Update button with every of the Favorite list.
- This Delete button allows to delete the element from favorite collection.
- This Update button allows to update news related information.
- When user will update or delete news from favorite list, then it should show updated date or news in favorite list.
- Test cases for front end and backend.


> Sprint 3
- Create a signup and Login page linked with the welcome page of the application.
- Sign up page will accept the user’s basic details like user name, phone number, email id, password etc. and stores them in database.
- When user will click on register button then will check provided email id into database, if email id will be exist into the database, Then will show meaning full error message.
- All fields should be mandatory, if fields will be empty and user will click on register button, then meaning full error message should be shown to the user.
- Login page will accept the username and password from user and allows that user to enter the application.
- If user will enter wrong values in login page or will left blank all fields on login page, then error message will be shown to the user.
- Use passport for authentication and protect all routes.
- Write test cases with each of the functionality you implement for front and back end.
>>>>>>> f7cee9c7028b1b08e449907c3704b1585eb2a020
