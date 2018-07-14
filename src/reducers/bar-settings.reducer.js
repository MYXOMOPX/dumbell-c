import {ACTION_CHANGE_BAR_WEIGHT, ACTION_CHANGE_BAR_REQUIRED} from "../constants/global.constants";

const initialState = {
    barWeight: 8.5,
    requiredWeight: 28.5,
};

export function barSettingsReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_CHANGE_BAR_WEIGHT:
            return {...state, barWeight: action.payload};

        case ACTION_CHANGE_BAR_REQUIRED:
            return {...state, requiredWeight: action.payload};

        default:
            return state;
    }
}