import React from "react";
import ReactDOM from "react-dom";
import { Teacher } from "./teacher";

const element = <h1>Hello World</h1>;
//ReactDOM.render(element, document.getElementById("root"));

const person = {
  talks() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};

person.talks();

const colors = ["red", "blue", "green"];

const newColors = colors.map((color) => `<li>${color}</li>`);

console.log(newColors);

const teacher = new Teacher("Mosh", "MSc");
teacher.teach();
