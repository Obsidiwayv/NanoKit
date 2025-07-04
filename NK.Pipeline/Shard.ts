export default class {

    /**
    * Simply just wraps `Array<T>.join()` to fuse strings together
    */
    public static Fuse<T>(...data: T[]) {
        return data.join("");
    }

    public static ToArray<T>(...data: T[]) {
        return [...data];
    }
}