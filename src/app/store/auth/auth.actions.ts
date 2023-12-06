import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "src/app/models/users";

export const AuthActions = createActionGroup({
    
    source:"Auth",
    events:{"Set Auth User":props<{data:User}>(),
            "Clear Auth User":emptyProps()}


})