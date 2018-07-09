// Here, we export a function that returns a simple action. In this case, the action just contains the minimal 'type' property. 
export const touch = function touch(){
  return { type: 'touch' }
}

export const reset = function(){
 return { type: 'reset' } 
}