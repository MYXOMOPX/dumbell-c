import { combineReducers } from 'redux'
import {dumbellReducer} from "./dumbell.reducer";
import {barSettingsReducer} from "./bar-settings.reducer";

export const rootReducer = combineReducers({
    dumbells: dumbellReducer,
    barSettings: barSettingsReducer
});