// the function still must be exported as a const
export const touch = function touch(){
  return { type: 'touch' }
}

export const reset = function(){
 return { type: 'reset' } 
}