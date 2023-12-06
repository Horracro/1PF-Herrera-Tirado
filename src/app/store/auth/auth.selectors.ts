import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, authFeatureKey } from "./auth.reducer";

export const selectAuthState =createFeatureSelector<State>(authFeatureKey)
export const selecAuthUser = createSelector(selectAuthState, (state)=>{state.authUser})