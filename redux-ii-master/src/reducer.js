import { MAKE_DEPOSIT } from './actions'

// all state values needs an initial value
const initialState = {
	checking: 0,
	savings: 0,
	accountActivity: [], //default to an empty array since its going to be a list
}

export default function(state = initialState, action) {
	switch (action.type) {
		case MAKE_DEPOSIT:
			const { amount, account } = action.payload
			const newAmount = parseInt(amount) + state[account]
			
			return {
				...state,
				[account]: newAmount,
			}
		default:
			return state
	}
}