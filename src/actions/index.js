export const userInfo = ()=>{
  return {
    type: 'get_user'
  }
}

export const userNew = ()=>{
  return {
    type: 'add_user',
    name: 'Giovanni'
  }
}
