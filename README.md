# A Simple React Redux Example:
What the example is

## Thinking about the application
Thinking about isolating behaviour, containers, ideal component structure, etc.

## Understanding each file

### Index.js
About create store, etc

### Components
About simplicity of components and how state and behaviour is established

### Reducers
About pure function used to manipulate state

### Actions
About the actions (action) and what 

### Containers
About container component, mapStateToProps, etc

## What I did?
1. Added all the redux stuff in App.js, and removed any notice of the components. In this case, App.js is the container component.
2. I then added another component called 'Display' that's purpose is to put the button and numbers components into one, while passing down the needed state and behaviour.
3. The presentational components then, essentially, can be functional because they have no state. They just have props. 
4. There is thus no local state, but one global state.

# Final Notes:
1. The App component contains all the base level components, and containers if there is dynamic data.
2. The containers are what communicate with redux, mapStateToProps and mapDispatchToProps
3. The actions are objects that have a type
4. The reducers are pure functions that recieve these actions when dispatched, and take in the old state, and return the new one. They don't modify the old state, and hence are immutable. 
5. The index.js file at the root is where the store lives and is passed down to the Provider component, which is responsible for handing a specific peice of the store to individual components.