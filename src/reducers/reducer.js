const reducer = (state, action) => {
	switch(action.type){
    case 'updateResults':
      return action.payload
    default:
      return state
	}
}
export default reducer