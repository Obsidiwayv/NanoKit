import { NKResult } from "./Result.Types";

/** 
 * HANDLE_RESULT takes in a callback and tries to execute it within a try catch
 * 
 * Returns one of the enum codes: OK, ERROR, WARNING
 * 
 * It takes in 2 callbacks one for executing and one for consuming for the function to have that resource
 */ 
export function HANDLE_RESULT(
    callback: (...a: any[]) => any, 
    callbackWithRes: (...a: any[]) => any) {

    try {
        callback(callbackWithRes());
        return NKResult.OK;
    } catch {
        return NKResult.WARNING;
    }
}