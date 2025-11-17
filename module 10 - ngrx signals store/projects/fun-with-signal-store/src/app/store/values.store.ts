import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { initialValuesSlice } from "./values.slice";
import { computed } from "@angular/core";
import { incX, incY } from "./values.updaters";

export const ValuesStore = signalStore(
    withState(initialValuesSlice), 
    withComputed((store) => ({
        sum: computed(() => store.x() + store.y()),
        diff: computed(() => store.x() - store.y()),
    })), 
    withMethods(store => ({
        incX: () => patchState(store, incX()),
        incY: () => patchState(store, incY())
    }))
);

