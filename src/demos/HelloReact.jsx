import React from 'react';

// Simple React Component
var HelloReact = React.createClass({
  render: function() {
    return <h1 className="hello-react">Hello, {this.props.name}.</h1>;
  }
});


var Container = React.createClass({
  getInitialState: function() {
    return {
      name: ''
    };
  },
  handleChange: function(e) {
    this.setState({
      name: e.target.value
    });
  },
  render: function() {
    return (
      <div className="container">
        <HelloReact name={this.state.name} />
        <input type="text" name="name" value={this.state.name}
               onChange={this.handleChange} />
      </div>
    );
  }
});

export default Container;

