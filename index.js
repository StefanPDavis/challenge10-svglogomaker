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

function writeToFile(fileName, answers) {
    let newSVG = "";

    newSVG = '<svg viewbox="0 0 500 500" xmlns="https://www.w3.org/2000/svg/" width="300" height="200" >';

    newSVG += "<g>";

    newSVG += `${answers.shape}`;
  

    let shapeChoice;
    if (answers.shape === "Circle") {
        shapeChoice = new Circle();
        newSVG += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        newSVG += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Square();
        newSVG += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    }
  
    newSVG += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

    newSVG += "</g>";

    newSVG += "</svg>";
  
    fs.writeFile(fileName, newSVG, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
}

promptUser();