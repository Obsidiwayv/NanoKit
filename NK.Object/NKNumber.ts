/**
 * Will take a String and turn it into a number (the length of the string)
 * 
 * If a Number is provided it will return it
 * 
 * This function serves as a replacement for parseInt() as it wont return NaN
 */
export function ToNumber(item: string | number) {
    if (typeof item === "number") {
        return item;
    } else {
        return item.length;
    }
}