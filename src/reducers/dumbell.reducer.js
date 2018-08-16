import {DumbellInfo} from "../model/DumbellInfo";
import {ACTION_CHANGE_DUMBELL_LIST, ACTION_RESET_DUMBELL_LIST} from "../constants/global.constants";
import {getDumbellsFromStorage, saveDumbellsToStorage} from "../util/local-storage";

function getInitialDumbellList() {
    return [
        new DumbellInfo(0.5,1),
        new DumbellInfo(1.25,0),
        new DumbellInfo(2.5,0),
        new DumbellInfo(5,0,4),
        new DumbellInfo(10,1),
        new DumbellInfo(20,0),
    ]
}

let loadedDumbells = getDumbellsFromStorage();
console.log(loadedDumbells);
if (loadedDumbells == null) {
    loadedDumbells = getInitialDumbellList();
    saveDumbellsToStorage(loadedDumbells);
}

export function dumbellReducer(state = loadedDumbells, action) {
    switch (action.type) {
        case ACTION_CHANGE_DUMBELL_LIST:
            return changeDumbellList(action);

        case ACTION_RESET_DUMBELL_LIST:
            return resetDumbellList(action);

        default:
            return state;
    }
}

function changeDumbellList(action) {
    saveDumbellsToStorage(action.payload);
    return action.payload
}

function resetDumbellList() {
    let dumbells = getInitialDumbellList();
    saveDumbellsToStorage(dumbells);
    return dumbells;
}