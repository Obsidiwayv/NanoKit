import { NKResult } from "../NK.Result/Result.Types";

export default class {
    private static _time?: number;

    public static Set(int: number) {
        this._time = int;
        return this;
    }

    public static async Start() {
        if (!this._time) {
            return NKResult.WARNING;
        }
        await this.Sleep(this._time);
        return NKResult.OK;
    }

    /**
     * Clear up cache
     */
    public static Destroy() {
        this._time = undefined;
    }

    public static Sleep(ms: number) {
        return new Promise((res) => setTimeout(res, ms));
    }
}