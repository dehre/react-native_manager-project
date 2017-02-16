export default (state={},action)=>{
  switch(action.type){
    case 'get_user':
      return state
    case 'add_user':
      return {user: action.name}
    default:
      return state
  }
}
