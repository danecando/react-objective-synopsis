
## getInitialState & getDefaultProps allow you to define default values when your component is first being rendered
 
 A lot of times you will have fetch data from the server or some other async action when your component is mounted so
 all the data might not yet be available.
 
## componentWillMount is called right before the component's initial render. This is used for any initial setups or calculations.  

## componentDidMount is called right after the initial render. At this point you can access child components. Commonly used for data fetching / async
 
## componentWillUnmount cwm is buildup and unmount is here for cleanup. 
