
/**
 * Instead of doing `Object[item]` -> `Drift.Wrap(Object, item)`
 */
export default class<K> {
    constructor(private _obj: K, private _item: keyof K) {}

    public static From<K>(obj: K, item: keyof K) {
        return new this<K>(obj, item);
    }

    public ReturnElseIfNull() {
        return this._obj[this._item]! ?? this._item;
    }
}