# logo-maker-app

## Description

My motivation behind this project was to formulate a simple way for users to create an SVG logo for a brand or website. I built this project to allow individuals to utilize their command line in order to make SVG logos that are either a circle, triangle, or square with three characters displayed. Moreover, I built this project to allow the user to input the text color and shape color they desire their logo to be. This project provides a solution for anyone who wants to create an SVG logo by giving the user a simple to use command line application that creates a logo to their liking upon their requests. I learned how to formulate SVG files, how to use class functions, and how to create a testing suite for my functions in this project.

## Installation

To install this app, add the repo to your terminal and then type in npm run test to run the tests on each shape class. Then run node index.js. Usage will be described below.

## Usage

To use this project, open index.js in your terminal and then run node index.js. The first prompt will ask you to input up to three characters for your logo text. The next prompt will ask you what color you would like the text to be, and you can input either a recognized CSS color name or a hexidecimal value. You will then be asked to choose a shape and can use your arrow keys to navigate through the list of shapes provided. Lastly, you will be prompted to enter another CSS color name or hexidecimal value into the terminal which will be the color of the shape in the logo. Once doing this, you will see that a logo.svg file has been created with the correct code inside. You can open this file in your browser by going into a browser tab, clicking "Open File" and choosing the rendered logo.svg file. The below video walks you through these steps.

You can also run tests as seen in the video, which will be explained in the "Tests" section of this ReadMe.

(SVG Logo Maker App Walkthrough)[https://drive.google.com/file/d/1txD3VGXJOVofDDc_r3vIBsQdLbMFLZRU/view]

## Credits

I used the npm inquirer@8.2.4 to prompt users with questions. Jest was used to run tests for the application. Screencastify was used to create the walkthrough video.


## How to Contribute

If you would like to contribute to this project, please reach out to me via email at kendrajfitzgerald@gmail.com. I would love any collaboration on how to improve this app!

## Tests

To run the tests written for this application, simply open the project in your terminal and write "npm run test". You will see 5 tests being run and passed which correlate to the Shapes, Circle, Triangle, and Square classes in shapes.js. 
