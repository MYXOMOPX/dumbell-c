
export class DumbellInfo {
    _weight;
    _type;
    count;

    constructor(weight, type, count) {
        this._weight = weight;
        this._type = type;
        this.count = count == undefined ? 2 : count;
    }

    get weight() {
        return this._weight;
    }

    get type() {
        return this._type;
    }

}