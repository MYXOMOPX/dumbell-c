
export class DumbellInfo {
    _weight;
    _type;
    _size;
    count;

    constructor(weight, size, type, count) {
        this._weight = weight;
        this._size = size;
        this._type = type;
        this.count = count == undefined ? 2 : count;
    }

    get weight() {
        return this._weight;
    }

    get type() {
        return this._type;
    }

    get size() {
        return this._size;
    }
}