
### Since we create component classes, component instances have to be created right?

Here's how one might create a component instance, but you would never actually do this because React handles this in the
background.

This is why you won't ever explicitly create component instances or even hear that term.

There is a feature called ref which allows you to grab a reference to a component instance. An common example use is grabbing
a ref to an input element. You can use the reference to trigger focus on it at any point in your components lifecycle.
