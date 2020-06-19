# _Webpage: Mr. Roboger's Neighborhood_

#### Independent project for Epicodus, 6.18.2020

#### By Vanessa Guerrero

## Description

This application takes a number from a user and replaces certain numbers with "Beep," "Boop," and "Won't you be my neighbor?" Therefore, a user will input a number and be returned a range of numbers from 0 to the user's inputted number with the exception of Mr.Roboger's words.

## Setup/Installation Requirements

* Find the repository of this application [here](https://github.com/vguer/MrRobogersNeighborhood.git) and click the green "Clone or Download Folder" to download a zip file with all its contents.
* Once file is downloaded, open with Visual Studio Code or the text editor of your choice to view the code.
* To view and intereact with the webpage using Visual Studio Code, click on Terminal > New Terminal. Once a terminal opens, type "open index.html" and hit enter. This will open the page onto a browser window.


## Specifications

**Behavior**: The program will return a range from 0 to the inputted number.
  * Input: 4
  * Output: "0, 1, 2, 3, 4"

**Behavior**: The program returns "Beep!" when a 1 is inputted.
  * Input: 1
  * Output: "0, Beep!"

**Behavior**: The program returns "Boop!" when a 2 is inputted.
  * Input: 2
  * Output: "Beep!, Boop!"

**Behavior**: The program returns "Won't you be my neighbor?" when 3 is inputted.
  * Input: 3
  * Output: "Beep!, "Boop!, Won't you be my neighbor?"

**Behavior**: The program will read an inputted integer, and if it contains a 3, 2, or 1, it will output based on the above specifictions in order of most-to-least important, where 3 is most important, 2 is second most important, and 1 is least important.
  * Input: 13
  * Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?"


## Known Bugs

* At the time of initial submission on 6/12/2020, this application was incomplete and not yet running.
* As of 6/14/2020, the program is running. However, the form will not clear output with new submission, and therefore the page will need to be refreshed.
* As of 6/15/2020, the page will clear input with new submission.

## Support and contact details

For feedback or concerns about this project, please contact the author.

## Technologies Used

This project is created using:
* HTML
* CSS
* JavaScript
* JQuery

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2020 Vanessa Guerrero 