const {Circle, Triangle, Square} = require("./shapes.js");

describe("Circle test", () => {
    test("test for a green circle", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="green" />'
      );
    });
});

describe("Triangle test", () => {
  test("test for a yellow triangle", () => {
    const shape = new Triangle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="yellow" />'
    );
  });
});

describe("Square test", () => {
  test("test for a blue square", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="blue" />'
    );
  });
});
