
// Public interface for interacting with the state of the cellular automaton
export interface LifeData {
    getWidth(): number;
    getHeight(): number;
    isPopulated(x:number, y:number):boolean;
    setPopulated(x:number, y:number, value: boolean):void;
}