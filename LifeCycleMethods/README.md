componentDidMount:
This lifecycle method is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

componentDidUpdate:
This lifecycle method is invoked immediately after updating occurs. This method is not called for the initial render. Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

componentWillUnmount:
This lifecycle method is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount.

componentDidMount()
componentDidUpdate()
componentWillUnmount()
