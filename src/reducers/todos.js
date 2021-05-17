const initialState = [
	{ id: 1, desc: 'todo1', completed: false },
	{ id: 2, desc: 'todo2', completed: false },
]

export default (state = initialState, action) => {
	console.log(action + state)
	return state
}