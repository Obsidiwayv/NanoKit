import type { NKResult } from "../NK.Result/Result.Types";

/**
 * An interface that holds Subscribe()
 * 
 * Subscribe() returns an NKResult which can be used for errors
 */
export interface Obserable<T> {
    
    Subscribe(callback: (arg: T) => any): NKResult;
}