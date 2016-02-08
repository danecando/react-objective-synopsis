
### When setState is called it rebuilds the virtual dom for it's children 

* So if you call it from the root node, your entire app is re rendered. 
* So in this example, these components are marked dirty by calling setState, letting react know that some data has changed.
* After the setState call, react will re-render the entire sub-tree. 
