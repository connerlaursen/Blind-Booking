# Blind-Booking

A vacation booking app for Project-2

## User Story
AS a spontaneous vacationer
I WANT to book a vacation to a desired category of leisure without specifying a destination
SO THAT I can travel to different, random places

## Acceptance Criteria
GIVEN a blind booking website
WHEN I click sign in
THEN I am presented with a log in screen where it authenticates the user
WHEN I authenticate with username and password
THEN I am presented then with search input
WHEN I presented with search input
THEN I am able input a category of vacation I want such as Skiing, Beaches, City, Cultural or Foody
WHEN I input any of these categories
THEN I am presented a selected flight at the lowest possible fare to a random location that falls under the specified category
WHEN I find a result
THEN the results card is posted on the application as a recently searched blind booking

## Description

This is a full Stack Application incorporating a robust back end with servers, databases, advanced APIs, and user authentication. This is connected to an intuitive react front end creating a unique and fulfulling experience.This innovative app allows the user to make vacation plans without actually picking a location. 

## Table of Contents

- [Title](#Blind-Booking)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Usage

![alt text](assets/screenshots/Screenshot%202023-02-25%20at%207.39.56%20PM.png)

When loading the deployed heroku app, the home screen pictured above is what you are presented with. Our original plans were to implement a log-in feature where the booking tab would only be displayed after a successful log-in. We ran out of time, however, so the booking tab remains open to click without the need to log in. We do, have a seperate log-in tab shown below.

![alt text](assets/screenshots/Screenshot%202023-02-25%20at%207.39.42%20PM.png) 

The functionality of our app is described in the screenshots below. The first screenshot displays what is presented when clicking on the book trip tab. You have departure and return date selectors, a drop down for which activity category you would like to do on your vacation, a maximum budget for your round trip tickets and the number of passengers that will be attending.

![alt text](assets/screenshots/Screenshot%202023-02-25%20at%207.39.03%20PM.png)

The second screenshot shows an example of inputted values to search for.

![alt text](assets/screenshots/Screenshot%202023-02-25%20at%207.39.24%20PM.png)

The third screenshot shows an appended result based on the above search. The Priceline API takes the inputted data and finds a random airport in our seeded database that matches the category of vacation you would like, within the budget specified and returns the airport you will be flying to, the airline you will fly on and the price of round trip tickets per person.

![alt text](assets/screenshots/Screenshot%202023-02-25%20at%207.39.34%20PM.png)





## Credits

Contributors: Alex, Conner, Ousman and Ryan

APIs used: Priceline API

## License 

MIT License, as listed on the Github repository.
