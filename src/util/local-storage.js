import {DumbellInfo} from "../model/DumbellInfo";

export function saveDumbellsToStorage(dumbells) {
    localStorage.setItem("dumbells",JSON.stringify(dumbells))
}

export function getDumbellsFromStorage() {
    const retrivedObject = localStorage.getItem("dumbells");
    const parsedArray = JSON.parse(retrivedObject);
    if (parsedArray == null) return parsedArray;
    return parsedArray.map(x => new DumbellInfo(x.weight, x.type, x.count))
}