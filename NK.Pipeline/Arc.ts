import { NKResult } from "../NK.Result/Result.Types";

/**
 * Can be used staticly for `Arc.Foreach()`
 * 
 * or
 * 
 * Can be used as `new Arc([data]).Foreach()` for class methods
 */
export default class Arc<F> {
    constructor(private _data: F[]) { }

    public static ForEach<T>(data: T[], callback: (item: T) => any) {
        try {
            for (const item of data) {
                callback(item);
            }
            return NKResult.OK;
        } catch {
            return NKResult.WARNING;
        }
    }

    public Push(item: F) {
        this._data.push(item);
        return this;
    }

    /**
     * Wraps `this._data.filter()`
     */
    public Filter(callback: (value: F) => boolean) {
        this._data = this._data.filter(callback);
        return this;
    }

    public Foreach(callback: (item: F) => any) {
        return Arc.ForEach(this._data, callback);
    }
}