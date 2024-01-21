import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSucess } from "./userRedux"

export const login = async(dispatch, user)=>{
       dispatch(loginStart());
       try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSucess(res.data))
        
       } catch (err) {
       dispatch(loginFailure())
       }
}

export const register = async(dispatch, user)=>{
       dispatch(loginStart());
       try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSucess(res.data))
        
       } catch (err) {
       dispatch(loginFailure())
       }
}