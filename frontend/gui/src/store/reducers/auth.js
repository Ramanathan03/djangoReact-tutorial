import * as actionTypes from '../actions/actionTypes';
import { updateobject} from '../utility';

const initialState = {
	token:null,
	error:null,
	loading:false
}

const authStart = (state ,action) =>{
	return updateobject(state, {
		error:null,
		loading: true 
	});
}

const authSuccess = (state, action)=>{
	return updateobject(state, {
		token: action.token,
		error: null,
		loading:false 
	})
}
const authFail = (state, action)=>{
	return updateobject(state, {
		error: action.error,
		loading:false 
	});
}

const authLogout = (state, action)=>{
	return updateobject(state, {
		token:null
	})
}

const reducer = (state=initialState, action)=>{
	switch (action.type){
		case actionTypes.AUTH_START: return authStart(state, action);
		case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
		case actionTypes.AUTH_FAIL: return authFail(state, action);
		case actionTypes.AUTH_LOGOUT: return authLogout(state, action);

		default:
		return state;
	}
}

export default reducer;