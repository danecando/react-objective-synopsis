In React, you simply update a component's state, and then render a new UI based on this new state. React takes care of updating the DOM for you in the most efficient way.

### The last peice of this new Container component puzzle is the state

### getInitalState allows us to set default or initial values for our components state

### in the handleChange method I'm calling this.setState - this is very important. This is how we tell React that something has changed so we need to re-render our UI.

### in our render method we're keeping our value in sync with the name state and also passing it as the name prop to our HelloReact comp

### Since handleChange is bound to the text inputs onChange event and it's calling set state, then our Container component will completely re-render any time there's a change to our input

Let's check out what we've built so far.
