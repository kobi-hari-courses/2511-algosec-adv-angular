import { PartialStateUpdater } from "@ngrx/signals";
import { ValuesSlice } from "./values.slice";

export function incX(): PartialStateUpdater<ValuesSlice> {
    return state => ({ x: state.x + 1 });
}

export function incY() : PartialStateUpdater<ValuesSlice> {
    return state => ({ y: state.y + 1 });
}