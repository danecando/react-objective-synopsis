import React from 'react';

/*
 A higher-order component is just a function that takes an existing component and returns another component that wraps it.

 See:
 https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
 http://www.bennadel.com/blog/2888-experimenting-with-higher-order-components-in-reactjs.htm
 https://github.com/kriasoft/react-starter-kit/blob/54293a16d88769815c799f2b5223c75bbda7b8d7/docs/react-style-guide.md
 */


function withCounter(ComposedComponent) {
  class WithCounter extends React.Component {

    constructor() {
      super();

      // The constructor replaces setInitialState with ES2015 syntax
      this.state = {
        count: 0
      };


      // React dropped autobinding with ES2015 class support
      // so we attach our methods in the constructor and use
      // the fat arrow function to bind 'this'

      this.incrementCount = () => {
        this.setState({
          count: this.state.count + 1
        });
      }

      this.decrementCount = () => {
        this.setState({
          count: this.state.count - 1
        });
      }

    }

    render() {
      // We pass in our additional functionality to the child via props
      return <ComposedComponent {...this.props} count={this.state.count} incrementCount={this.incrementCount} decrementCount={this.decrementCount} />;
    }
  }

  return WithCounter;
}

// This is an example how you would use ES2016 decorators (a simpler syntax then the var ClickCounter = withCounter(ClickCount) below)
// @withCounter
class ClickCount extends React.Component {
  render() {
    // Instead of using state with a regular mixin we use the props passed in from the wrapping component
    return (
      <div id="click-count">
        <h2 className="count-num">{this.props.count}</h2>
        <button id="decrement" className="btn" onClick={this.props.decrementCount}>Decrement</button>
        <button id="increment" className="btn" onClick={this.props.incrementCount}>Increment</button>
      </div>
    );
  }
}


// withCounter returns our 'enhanced' component
const ClickCounter = withCounter(ClickCount);

export default ClickCounter;
