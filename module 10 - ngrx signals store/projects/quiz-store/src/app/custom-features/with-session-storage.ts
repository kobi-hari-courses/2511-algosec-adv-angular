import { effect } from '@angular/core';
import { getState, patchState, signalStoreFeature, withHooks } from '@ngrx/signals';

export function withSessionStorage<T extends object>(key: string) {
  return signalStoreFeature(
    withHooks((store) => ({
      onInit: () => {
        // Load from session storage
        const jsonText = sessionStorage.getItem(key);
        if (jsonText) {
          const state = JSON.parse(jsonText) as T;
          patchState(store, state);
        }

        effect(() => {
          const state = getState(store);
          const jsonText = JSON.stringify(state);
          sessionStorage.setItem(key, jsonText);
        });
      },
    }))
  );
}
