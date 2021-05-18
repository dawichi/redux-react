const initialState = [
	{ id: 1, desc: 'todo1', completed: false },
	{ id: 2, desc: 'todo2', completed: false },
]

const COMPLETE = 'COMPLETE'

export const complete = id => ({
	type: COMPLETE,
	payload: id,
})

export default (state = initialState, action) => {
	switch (action.type) {
		case COMPLETE:
			return state.map(x => x.id === action.payload ? ({ ...x, completed: !x.completed}) : x)	
		default:
			return state;
	}
}