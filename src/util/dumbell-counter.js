export function getDumbellsForWeight(dumbells, weight) {
    if (weight == 0) return [];
    const requiredWeight = weight/2;
    dumbells = dumbells
        .slice(0)
        .sort((a,b) => a.weight-b.weight)
        .map(dumbell => {
            let arr = [];
            for(let i = 0; i < dumbell.count/2; i++) {
                arr.push(dumbell)
            }
            return arr;
        })
        .reduce((dList, arr) => dList.concat(arr),[]);
    return selectDumbells(dumbells,requiredWeight);
}

function selectDumbells(dumbells, weight) {
    const array = dumbells.slice(0);
    while (array.length) {
        const dumbell = array.pop();
        const dWeight = dumbell.weight;
        if (dWeight > weight) continue;
        if (dWeight === weight) return [dumbell];
        const res = selectDumbells(array, weight-dWeight);
        if (res) return [...res, dumbell];
    }
    return null;
}