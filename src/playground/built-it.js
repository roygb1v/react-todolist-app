"use strict";

console.log("This is up and runnning...");

var app = {
  title: "Indecision App",
  subtitle: "Put your hands up!",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  render();
};

var makeDecision = function makeDecision(e) {
  e.preventDefault();
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var numbers = [55, 101, 1000];

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle ? app.subtitle : React.createElement(
      "h1",
      null,
      "undefined"
    ),
    app.options.length > 0 ? "Here are your options" : "No options",
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: makeDecision },
      "What should I do ?"
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All Options"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option, idx) {
        return React.createElement(
          "li",
          { key: idx },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, root);
};

var root = document.getElementById("root");

render();
