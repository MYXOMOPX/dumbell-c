import {ACTION_CHANGE_DUMBELL_LIST} from "../constants/global.constants";

export function changeDumbellList(dumbellList) {
    return {
        type: ACTION_CHANGE_DUMBELL_LIST,
        payload: dumbellList
    }
}