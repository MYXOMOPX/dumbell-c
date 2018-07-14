import {DumbellInfo} from "../model/DumbellInfo";
import {ACTION_CHANGE_DUMBELL_LIST} from "../constants/global.constants";

const initialState = [
    new DumbellInfo(0.5,0,1),
    new DumbellInfo(1.25,0,0),
    new DumbellInfo(2.5,1,0),
    new DumbellInfo(5,2,2,4),
    new DumbellInfo(10,3,1),
    new DumbellInfo(20,4,0),
];

export function dumbellReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_CHANGE_DUMBELL_LIST:
            return action.payload.slice(0);

        default:
            return state;
    }
}