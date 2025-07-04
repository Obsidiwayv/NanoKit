import { ToNumber } from "../NK.Object/NKNumber";

export enum CompareOperators {
    MORE_THAN,
    LESS_THAN,
    EQUAL
}

/**
 * Compare 2 numbers
 * 
 * (default for operator is `CompareOperators.EQUAL`)
 */
export function Compare(i1: string | number, i2: string | number, op: CompareOperators = CompareOperators.EQUAL) {
    if (op === CompareOperators.EQUAL) {
        return ToNumber(i1) === ToNumber(i2);
    } else if (op === CompareOperators.LESS_THAN) {
        return ToNumber(i1) < ToNumber(i2);
    } else if (op === CompareOperators.MORE_THAN) {
        return ToNumber(i1) > ToNumber(i2);
    }
    // This value will never get returned just an FYI
    return true;
}