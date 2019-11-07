class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }

  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  render() {

    return (
      <div>
        <h1>Count: {parseInt(localStorage.count, 10)}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('root'))
