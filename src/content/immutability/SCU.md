### should component update is the main reason why immutability is an important concept in react
--- 

I mentioned that the re-render will re-render the entire subtree from the point in the tree that setState was called. This isn't really slow because we're not touching the DOM just building up the immutable representation of our UI that we talked about. But we can do better.

---

In the example above, since shouldComponentUpdate returned false for the subtree rooted at C2, React had no need to generate the new virtual DOM, and therefore, it neither needed to reconcile the DOM. Note that React didn't even have to invoke shouldComponentUpdate on C4 and C5.

For C1 and C3 shouldComponentUpdate returned true, so React had to go down to the leaves and check them. For C6 it returned true; since the virtual DOMs weren't equivalent it had to reconcile the DOM. The last interesting case is C8. For this node React had to compute the virtual DOM, but since it was equal to the old one, it didn't have to reconcile it's DOM.
