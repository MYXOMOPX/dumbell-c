import {ACTION_CHANGE_BAR_WEIGHT, ACTION_CHANGE_BAR_REQUIRED} from "../constants/global.constants";


export function changeBarWeight(weight) {
    return {
        type: ACTION_CHANGE_BAR_WEIGHT,
        payload: weight
    }
}

export function changeRequiredWeight(weight) {
    return {
        type: ACTION_CHANGE_BAR_REQUIRED,
        payload: weight
    }
}