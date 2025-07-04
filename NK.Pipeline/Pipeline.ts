import { HANDLE_RESULT } from "../NK.Result/Result";
import { NKResult } from "../NK.Result/Result.Types";
import type Timer from "./Timer";

export default class<A, R> {

    private _timer?: typeof Timer;

    constructor(private func: (...arg: A[]) => R) {}

    public async Into(...callbacks: ((args: R) => any)[]) {
        if (this._timer) {
            await this._timer.Start();
        }
        for (const fn of callbacks) {
            if (HANDLE_RESULT(fn, this.func) === NKResult.WARNING) {
                console.log(`function[${this.func.name}] had thrown a warning`);
            }
        }
        return this;
    }

    public WithTimer(timer: typeof Timer) {
        this._timer = timer;
        return this;
    }
}