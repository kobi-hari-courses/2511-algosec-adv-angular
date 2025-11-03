import { DestroyRef, inject, Injector, signal, Signal } from "@angular/core";

export function createCounterSignal(injector?: Injector): Signal<number> {
    const res = signal(0);
    const onDestroy = injector 
        ? injector.get(DestroyRef)
        : inject(DestroyRef);
    const intervalid = setInterval(() => {
        res.update(value => value + 1);
    }, 1000);

    onDestroy.onDestroy(() => {
        clearInterval (intervalid); // Cleanup logic if needed
    });
    return res;
}