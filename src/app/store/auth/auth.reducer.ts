import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/users";
import { AuthActions } from "./auth.actions";


export const authFeatureKey='auth'
export interface State{
    authUser:User|null;
    
}
const INITIAL_STATE:State={authUser:null}
export const reducer = createReducer(
    INITIAL_STATE,
    on(AuthActions.setAuthUser, (state, { data }) => ({
      ...state,
      authUser: data
    })),
    on(AuthActions.clearAuthUser, () => (INITIAL_STATE))
    
    
  );