const inquirer = require("inquirer");
const fs = require("fs");

const {Circle, Triangle, Square} = require("./lib/shapes");

function promptUser() {
    inquirer
      .prompt([
        {
        name: "text",
        type: "input",
        message: "Type in up to three characters for your logo",
        },

        {
        name: "textColor",
        type: "input",
        message: "Type what color you want the text to be",
        },

        {
        name: "shape",
        type: "list",
        message: "Select which shape you want in your logo",
        choices: ["Circle", "Triangle", "Square"],
        },

        {
        name: "shapeColor",
        type: "input",
        message: "Type a color or hexadecimal for your shape",
        },

      ])
      
};

promptUser();