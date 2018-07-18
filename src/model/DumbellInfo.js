
export class DumbellInfo {
    weight;
    type;
    count;

    constructor(weight, type, count) {
        this.weight = weight;
        this.type = type;
        this.count = count == undefined ? 2 : count;
    }

}