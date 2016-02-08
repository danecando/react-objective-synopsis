
## The next fundamental react concept is composition. 

In React we build up our UI out of a bunch of small components that we 'compose' together. One thing worth mentioning,
the render method can only return one single child, so in the container example we would have no choice but to use the
 wrapping div or else react would throw an error if we tried to return both children at the top level.

So lets continue with our 'hello world' example. We have this component but we aren't doing anything with it yet. Let's build a 
container component and also inside of it an input that we can use to pass the name prop to our HelloReact component.

## Points: Wrap JSX in brackets - Left out code - onChange
