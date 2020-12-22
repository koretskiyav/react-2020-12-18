import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: 0 };

  //   this.handleButtonClick = this.handleButtonClick.bind(this);
  // }

  // handleButtonClick() {
  //   this.setState({ value: this.state.value + 1 });
  // }

  state = { value: 0, foo: 'bar' };

  handleButtonClick = () => {
    this.setState({ value: this.state.value, foo: 'bar' });
  };

  componentDidMount() {
    console.log('I mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('I updated!');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     nextState.value === this.state.value &&
  //     nextState.foo === this.state.foo
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    return (
      <div>
        <h1>Hello from App!</h1>
        <p>{this.state.value}</p>
        <button onClick={this.handleButtonClick}>+</button>
      </div>
    );
  }
}
