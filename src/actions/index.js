export const start = function start(){
  return { type: 'start' }
}

export const broken = function broken(){
  return { type: 'broken' }
}

export const end = function end(pics){
  return { type: 'end', pictures: pics }
}