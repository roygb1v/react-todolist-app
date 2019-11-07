class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility 
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
        {this.state.visibility ? <div><p>Hello, this is a secret message</p></div> : undefined}
      </div>
    )
  }
}

ReactDOM.render(<Visibility />, document.getElementById('root'))



// const root = document.getElementById('root');
// let visibility = false;

// const toggleVisibility = (e) => {
//   visibility =!visibility;
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//         {visibility ? <p>Hello, this is a secret message!</p> : undefined}
//     </div>
//   )
//   ReactDOM.render(template, root);
// }

// render();