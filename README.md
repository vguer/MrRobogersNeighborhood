# Webpage: Mr. Roboger's Neighborhood

#### What is this for, 6.12.2020

#### By Vanessa Guerrero

## Description

This application takes a number from a user and replaces certain numbers with "Beep," "Boop," and "Won't you be my neighbor?" Therefore, a user will input a number and be returned a range of numbers from 0 to the user's inputted number with the exception of Mr.Roboger's words.

## Setup/Installation Requirements

* Find the repository of this application [here](https://github.com/vguer/MrRobogersNeighborhood.git) and click the green "Clone or Download Folder" to download a zip file with all its contents.
* Once file is downloaded, open with Visual Studio Code or the text editor of your choice to view the code.
* To view and intereact with the webpage using Visual Studio Code, click on Terminal > New Terminal. Once a terminal opens, type "open index.html" and hit enter. This will open the page onto a browser window.


## Specifications

**Behavior**: The program will return an error if letters are submitted.
  * Input: Hi
  * Output: "Please enter a number"

**Behavior**: The program will return an error if a number larger than 100 is submitted.
  * Input: 135
  * Output: "Please enter a number from 1 to 100"

**Behavior**: The program will return a range from 0 to the inputted number.
  * Input: 4
  * Output: "0, 1, 2, 3"

**Behavior**: The program returns "Beep!" when a 1 is inputted.
  * Input: 1
  * Output: "Beep!"

**Behavior**: The program returns "Boop!" when a 2 is inputted.
  * Input: 2
  * Output: "Boop!"

**Behavior**: The program returns "Won't you be my neighbor?" when 3 is inputted.
  * Input: 3
  * Output: "Won't you be my neighbor?"

**Behavior**: The program will read the first integer of a number entered to determine which of the above behaviors apply.
  * Input: 32
  * Output: "Won't you be my neighbor?"



## Known Bugs

There are no known bugs.

## Support and contact details

For feedback or concerns about this project, please contact one of the conbributors.

## Technologies Used

This project is created using:
* HTML
* CSS
* JavaScript
* JQuery

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2020 Vanessa Guerrero 