console.log("This is up and runnning...");

const app = {
  title: "Indecision App",
  subtitle: "Put your hands up!",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const removeAll = () => {
  app.options = [];
  render();
}

const makeDecision = (e) => {
  e.preventDefault();
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle ? app.subtitle : <h1>undefined</h1>}
      {app.options.length > 0 ? "Here are your options" : "No options"}
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do ?</button>
      <button onClick={removeAll}>Remove All Options</button>
      <ol>
        {
          app.options.map((option, idx) => <li key={idx}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, root);
};

const root = document.getElementById("root");

render();