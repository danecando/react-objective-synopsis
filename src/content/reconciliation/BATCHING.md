
### This is one of the reasons React is so performant. It's cheap to compare the immutable object that is the Virtual DOM and after diffing the two, run the real updates in batch
 
### Two pass rendering - after DOM mutations are finished react comes back around and attaches event handlers at the top level with event delegation

Event delegation means that react listens for all events at the top level and has an internal mapping to the listeners on our components
