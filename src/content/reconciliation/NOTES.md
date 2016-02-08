
### After React creates a new Virtual DOM representation of our UI, it diffs it with the previous to calculate the minimum number of operations needed to update the real DOM to reflect the new state of our UI.

This reduces complexity by assuming that nodes arent typically moved to different levels of the tree, only laterally 

 The good news is that JavaScript is fast and render() methods tend to be quite simple, so in most applications this is extremely fast. Additionally, the bottleneck is almost always the DOM mutation and not JS execution. React will optimize this for you by using batching and change detection
