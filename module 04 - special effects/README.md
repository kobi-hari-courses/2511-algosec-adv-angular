# Module 04 - Introduction specialized effects

## Projects:

|                                                  |                                       |
| ------------------------------------------------ | ------------------------------------- |
| [fun with effects](./projects/fun-with-effects/) | Introduction to the angular specialized effects |

> Angular 20+ lets you replace most component lifecycle hooks with **signals** and **after‑render callbacks**.

---

## Core ideas (Angular 20)
- **`effect()`** - reactive side‑effects tied to DI/injection context; supports cleanup via `onCleanup`.  
- **`afterNextRender()`** - run **once**, after the next render cycle finishes (good replacement for `ngAfterViewInit` one‑offs).  
- **`afterEveryRender()`** - run **after each** render (good replacement for repeated `ngAfterViewChecked` logic).  
- Both `after*` utilities must be called **in an injection context** (e.g., component constructor).
---

## Minimal patterns

### Setup/teardown without `OnInit`/`OnDestroy`
```ts
import { Component, effect } from '@angular/core';

@Component({ selector: 'demo-cmp', ...})
export class DemoCmp {
  // constructor = injection context
  constructor() {
    effect(() => {
      // setup (runs once, then re-runs when read signals change)
      console.log('mounted', this.mounted());
    });
  }
}
```
- Make sure any signals you **read** inside the effect are intended dependencies.

### DOM work after first paint (replace `ngAfterViewInit`)
```ts
import { afterNextRender } from '@angular/core';

@Component({ 
    selector: 'focus-input', 
    template: `<input #i>` 
    })
export class FocusInput {
  private el = viewChild('i', {read: ElementRef});

  constructor() {
    afterNextRender(() => {
      this.el().nativeElement.querySelector('input')?.focus();
    });
  }
}
```
- Schedules a one‑time callback after the **next** render.

### Respond after **every** render (replace `ngAfterViewChecked` patterns)
```ts
import { Component, ElementRef, inject } from '@angular/core';
import { afterEveryRender } from '@angular/core';

@Component({ 
    selector: 'resize-sync', 
    template: `...` 
    })
export class ResizeSync {
  private host = viewChild('ele', {read: ElementRef});

  private ref = afterEveryRender(() => {
    // runs after each render; use guards to avoid extra work
    const width = this.host().nativeElement.offsetWidth;
    // ...sync layout, measure, etc.
  });
}
```


### Data effects (replace `ngOnChanges` for derived work)
```ts
import { Component, input, effect } from '@angular/core';

@Component({ 
    selector: 'user-card', 
    template: `{{ userId() }}` 
    })
export class UserCard {
  readonly userId = input.required<string>();

  constructor() {
    effect(() => {
      const id = this.userId();       // tracked
      // do something here
    });
  }
}
```
- Effects re‑run when tracked inputs change.  

### 5) Avoiding accidental dependencies
```ts
import { effect, untracked } from '@angular/core';

effect(() => {
  // tracked read
  const x = count();
  // untracked read — will NOT re‑trigger the effect
  const snapshot = untracked(() => lastServerValue());
});
```

---

## Quick mapping (old → new)

| Legacy Hook | Prefer in Angular 20 |
| --- | --- |
| `ngOnInit` | Constructor + `effect` for reactive setup; |
| `ngOnDestroy` |  inject `DestroyRef` |
| `ngAfterViewInit` | `afterNextRender` (one‑time DOM work after first render) |
| `ngAfterViewChecked` | `afterEveryRender` (guarded; only do needed work) |
| `ngOnChanges` | `effect` reacting to `input()` signals |

---

## Notes & gotchas
- **Injection context**: `effect`, `afterNextRender`, and `afterEveryRender` must run in an injection context (e.g., component constructor). If needed, supply `{ injector }` options.  
- **Performance**: Don’t put heavy logic in `afterEveryRender`. Measure, then apply minimal mutations.  
- **Zoneless**: These utilities replace many `NgZone` timing hacks.  
---
