# Attempt at redux stuff

## What I'm doing now:-
I've create a:
+ reducer
+ action
+ store

I'm then passing the store all the way down from the top to the components I want it to be in, and then am dispatching an action from there.
This reaches the reducer.

## What isn't working:-
1. Once it reaches the reducer, the changes are happening on the global state, but aren't reflecting on the DOM

## What I don't like / Questions:-
1. Passing the store down from the root component, and using it that way. 
2. How do I use mapStateToProps and mapDispatchToProps?
3. How do I incorporate container components?

# ❗️ 💡 👽 Update! 

It works!

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