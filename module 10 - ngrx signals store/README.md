# Module 10 - The NgRx signal Store

## Projects:

|                                                  |                                       |
| ------------------------------------------------ | ------------------------------------- |
| [fun with signal store](./projects/fun-with-signal-store/) | Some basic samples of signal store |
| [quiz store](./projects/quiz-store/) | A real life sample of a quiz application with a store |

---
## Philosophy
NgRX Signal Store follows a **state‑machine model**.  
Instead of many isolated signals influencing each other unpredictably, the entire state is held as **one immutable object**.  
Every update produces a new valid state → no illegal intermediate states.

### Core State and Derived State
We distinguish between:

- **Core state:** minimal, independent values  
- **Derived state:** computed values, always in sync with core state  

```ts
withState(() => ({
  x: 0,
  y: 0,
}));

withComputed(({ x, y }) => ({
  sum: computed(() => x() + y()),
  diff: computed(() => x() - y())
}));
```

### Pure Functions for Logic
All logic is isolated into pure functions. 
These functions make testing and reuse easy.
We use them for
* Updaters - that calculate the next state from the previous
* Projectors - that calculate computed state from core

### `signalStore` Creates a Class
A store is created by calling `signalStore()`, which returns a class:

```ts
const CounterStore = signalStore(
  withState(...),
  withComputed(...),
  withMethods(...)
);

const store = new CounterStore();
```

But of course, we do not unstantiate it using `new`, instead we use it as injection token and let Angular's DI instantiate it.

### Features as Partial Constructors
Each feature receives an object, adds members to it, and passes it on.

```ts
signalStore(
  withState(...),
  withComputed(...),
  withMethods(...)
);
```

The final object contains everything.

---

## Signal Store Core Features
### `withState`
Adds core state:

```ts
withState(() => ({
  x: 1,
  y: 2,
}));
```

Usually we would first create a **"Slice"** Interface that defines the shape of the core state, and then define a constant representing the initial state in the state machine.

### `withComputed`
Adds computed signals:

```ts
withComputed((store) => ({
  sum: computed(() => store.x() + store.y()),
  diff: computed(() => store.x() - store.y())
}));
```

### `withMethods`
Adds methods that mutate state using `patchState`:

```ts
withMethods((store) => ({
  incX(amount: number) {
    patchState(store, s => ({ x: s.x + amount }));
  }
}));
```

### Updater Functions
We isolate update logic:

```ts
export function updateXY(x: number, y: number): PartialStateUpdater<Slice> {
  return (state) => ({ x, y });
}
```

Used in the store:

```ts
patchState(store, updateXY(10, 20));
```


### Hooks
We used hooks to run initialization and cleanup:

```ts
withHooks({
  onInit(store) {
    console.log('Store ready');
  },
  onDestroy(store) {
    console.log('Store destroyed');
  }
});
```

Hooks run inside *injection context*, so they can inject services and can also initialize effects (which rely on injection context too)


### `withProps`
Inject external dependencies:

```ts
withProps(() => ({
  http: inject(HttpClient)
}));
```

---

### Custom Features
We created a session‑storage sync feature:

```ts
export function withSessionStorage(key: string) {
  return signalStoreFeature((store) => {
    const saved = sessionStorage.getItem(key);
    if (saved) patchState(store, JSON.parse(saved));

    effect(() => {
      sessionStorage.setItem(key, JSON.stringify(getState(store)));
    });
  });
}
```

## Asynchronous Methods in Signal Store
### `rxMethod` for Async Logic
`rxMethod` converts method calls into a stream:

```ts
withMethods((store) => ({
  loadData: rxMethod<string>((events$) =>
    events$.pipe(
      switchMap(id => http.get(`/api/data/${id}`)),
      tap(data => patchState(store, () => ({ data })))
    )
  )
}));
```
You can invoke it either with a single value, observable or signal.
Useful for avoiding race conditions.

---

### Resource, rxResource, httpResource
Resources react to signal changes and fetch data automatically:

```ts
const userId = signal(5);

const userResource = httpResource({
  request: () => `/api/users/${userId()}`,
});
```

Then sync the result to state via an effect.

---

### Mutations
Mutations handle async save/update operations, choosing how to treat parallel calls:
They are the async “write” counterpart to resources.

