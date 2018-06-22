// the function still must be exported as a const
export const poke = function poke(){
  return { type: 'poke' }
}

export const start = function start(){
  return { type: 'start' }
}

export const broken = function broken(){
  return { type: 'broken' }
}

export const end = function end(){
  return { type: 'end' }
}