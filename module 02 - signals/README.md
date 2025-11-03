# Introduction to Signals

## Projects:

|                                                  |                                       |
| ------------------------------------------------ | ------------------------------------- |
| [fun with signals](./projects/fun-with-signals/) | Introduction to the basics of signals |

## `signal()` - writable signals

- Create local reactive state; **read** by calling it, **write** with `.set()` or `.update()`.
  ```ts
  const count = signal(0);
  count(); // read
  count.set(1); // write new value
  count.update((c) => c + 1); // derive from previous
  ```

---

## `computed()` - pure, read‑only derivations

- Read‑only signal derived from other signals; lazily evaluated and memoized.
  ```ts
  const fullName = computed(() => first() + " " + last());
  ```
- Inside a `computed`: **read signals only**; avoid side effects/async. Use it to model derived state; it updates when dependencies change. 
- We also mentioned that computed signals are **lazy** so they are only evauated when needed, and they are cached so that if no signals change, they do not recalculate
---

## `effect()` - reactions (reactive context)

- Runs once, then re‑runs **asynchronously** whenever any **read** signals change; tracks deps per run.
  ```ts
  effect(() => console.log("count:", count()));
  ```
- Use for side effects (logging, DOM APIs, localStorage), **not** to propagate app state. Must run in **injection context** (or pass `injector`). 

---

## `untracked()` + async in effects

- Read a signal **without** subscribing:
  ```ts
  effect(() => {
    const user = currentUser(); // tracked
    console.log("at run:", untracked(counter)); // not tracked
  });
  ```
- Useful to call external code or avoid incidental deps.


## `linkedSignal()` - writable state linked to other state

Two forms; both return a **writable** signal that resets when the linked computation changes. **Linked Signals** are like a combination of computed signals and writeable signals

### a) Simple (computation only)

- Value is defined by a reactive computation; you can still **.set** it manually.
  ```ts
  const options = signal(["Ground", "Air", "Sea"]);
  const selected = linkedSignal(() => options()[0]);
  selected.set("Sea"); // user choice
  options.set(["Email", "Will Call"]); // selected resets to 'Email'
  ```

### b) Source + computation (with previous value)

- Preserve user edits when possible; computation gets `source` and `previous`.

  ```ts
  interface Method {
    id: number;
    name: string;
  }
  const methods = signal<Method[]>([
    /*...*/
  ]);

  const selected = linkedSignal<Method[], Method>({
    source: methods,
    computation: (list, prev) =>
      list.find((m) => m.id === prev?.value.id) ?? list[0],
  });
  ```


---

### Quick positioning

- **Use `signal`** for local state, **`computed`** for pure derivations, **`effect`** for side effects, **`untracked`** to avoid accidental deps, **`linkedSignal`** when state must stay aligned with other reactive state yet remain user‑writable.  