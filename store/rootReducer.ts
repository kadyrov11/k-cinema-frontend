import { reducer as userReducer } from './user/user.slice'

export const rootReducer = {
	user: userReducer,
}
