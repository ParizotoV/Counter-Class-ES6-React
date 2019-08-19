import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
  }
  state = {
    counter: 0
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  clear() {
    this.setState({
      counter: 0
    })
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>
          Contador: {this.state.counter}
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.clear}>Clear</button>
        </header>
      </div>
    );
  }
}

export default App;
