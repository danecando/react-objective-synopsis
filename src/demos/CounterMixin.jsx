import React from 'react';

// Counter functionality as a mixin
var CounterMixin = {
  getInitialState() {
    return {
      count: 0
    };
  },
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  },
  decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
  }
};


// ClickCount uses the methods mixed in from CounterMixin
var ClickCount = React.createClass({
  mixins: [CounterMixin],
  render() {
    return (
      <div id="click-count">
        <h2 className="count-num">{this.state.count}</h2>
        <button id="decrement" className="btn" onClick={this.decrementCount}>Decrement</button>
        <button id="increment" className="btn" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});

export default ClickCount;
