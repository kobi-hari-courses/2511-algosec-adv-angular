# Final Quiz - Advanced Angular

---

## Module 01 - Dependency Injection

### Question 1  
**What is the role of a provider in Angular’s dependency injection system?**  
1. It stores all injected services in memory  
2. It defines how a requested dependency should be created or resolved  
3. It determines which components can consume services  
4. It destroys services when components are destroyed  

**Correct answer:** 2

### Question 2  
**Which of the following allows a function to use dependency injection even outside a constructor?**  
1. `Injectable()`  
2. `@Inject()`  
3. `runInInjectionContext()`  
4. `InjectionToken<T>`  

**Correct answer:** 3

### Question 3  
**What is the purpose of `DestroyRef`?**  
1. To inject parent components into children  
2. To access the root injector  
3. To register cleanup logic without using `OnDestroy`  
4. To define new injection tokens  

**Correct answer:** 3

---

## Module 02 - Signals

### Question 4  
**What is a key characteristic of a `computed()` signal?**  
1. It can be written to using `.set()`  
2. It is recalculated on every change, even if not read  
3. It is lazy and memoized, recalculating only when needed  
4. It can perform side effects inside its callback  

**Correct answer:** 3

### Question 5  
**What is the main role of `effect()`?**  
1. Holding local mutable state  
2. Performing pure derivations of state  
3. Running side effects when tracked signals change  
4. Creating linked writable state  

**Correct answer:** 3

### Question 6  
**What makes `linkedSignal()` different from `computed()`?**  
1. It cannot read other signals  
2. It is read-only  
3. It resets when linked inputs change but is still writable  
4. It runs synchronously like constructor logic  

**Correct answer:** 3

### Question 7  
**What does `untracked()` do inside an effect?**  
1. Pauses all reactive updates  
2. Reads a signal without subscribing to future changes  
3. Forces a synchronous effect run  
4. Converts a computed signal into a writable one  

**Correct answer:** 2

### Question 8  
**Which statement about `signal()` is correct?**  
1. It cannot derive new values from the previous state  
2. It is read-only  
3. It exposes `.set()` and `.update()`  
4. It runs asynchronously  

**Correct answer:** 3

---

## Module 03 - Resources, httpResource, rxResource

### Question 9  
**What problem does `resource()` solve?**  
1. Two-way binding  
2. Converts async Promises into reactive state  
3. Caches all HTTP responses  
4. Replaces HttpClient  

**Correct answer:** 2

### Question 10  
**How does `resource()` prevent race conditions?**  
1. Queues Promises  
2. Throws an error on second request  
3. Uses an `AbortSignal` to cancel in-flight Promises  
4. Waits for all Promises before updating  

**Correct answer:** 3

### Question 11  
**Which statement best describes `httpResource()`?**  
1. Replaces HttpClient  
2. Wraps HttpClient and exposes `value`, `error`, and `isLoading`  
3. Supports only GET  
4. Cannot work with interceptors  

**Correct answer:** 2

### Question 12  
**What is the main purpose of `rxResource()`?**  
1. Convert Promises into writable signals  
2. Bridge Observables to a resource with `value`, `error`, and `isLoading`  
3. Create a cached HTTP request  
4. Replace WebSocket APIs  

**Correct answer:** 2

### Question 13  
**Why is `rxResource()` often preferred over `resource().stream` for live data?**  
1. It auto-retries WebSockets  
2. `stream` can't handle large data  
3. Observables naturally support streaming  
4. `stream` has no `value()`  

**Correct answer:** 3

---

## Module 04 - Specialized Effects

### Question 14  
**What does `afterNextRender()` do?**  
1. Runs a callback once after the next render cycle  
2. Runs after every render  
3. Runs only when a signal changes  
4. Replaces the need for `DestroyRef`  

**Correct answer:** 1

### Question 15  
**Which effect replaces repeated `ngAfterViewChecked` logic?**  
1. `effect()`  
2. `afterEveryRender()`  
3. `untracked()`  
4. `afterNextRender()`  

**Correct answer:** 2

### Question 16  
**Which of the following must run in an injection context?**  
1. `afterNextRender()`  
2. DOM queries  
3. Component templates  
4. `ElementRef` reads  

**Correct answer:** 1

---

## Module 05 - Directives

### Question 17  
**Why is the Angular `Renderer` used inside element directives?**  
1. To bypass DI  
2. To safely manipulate the DOM across platforms  
3. To create new components dynamically  
4. To subscribe to Observables  

**Correct answer:** 2

### Question 18  
**What does `exportAs` allow?**  
1. Expose the directive instance to the template  
2. Alias directive inputs  
3. Block directive inputs  
4. Attach to multiple hosts  

**Correct answer:** 1

### Question 19  
**What is the role of `host` bindings?**  
1. Attach global listeners  
2. Bind host properties/events to directive logic  
3. Specify injected services  
4. Define directive compilation  

**Correct answer:** 2

### Question 20  
**What does `ElementRef` primarily provide?**  
1. Wrapper for events  
2. Direct access to native DOM element  
3. A way to declare outputs  
4. Mechanism for structural directives  

**Correct answer:** 2

### Question 21  
**What does using a CSS selector in a directive’s `selector` property allow?**  
1. Define multiple outputs  
2. Apply the directive to any matching element  
3. Auto-generate inputs  
4. Bind lifecycle hooks  

**Correct answer:** 2

### Question 22  
**Why might a directive define an output event?**  
1. To notify the parent component of interactions  
2. To manually trigger change detection  
3. To hook into browser event loop  
4. To create multiple directive instances  

**Correct answer:** 1

## Module 06 - Content Projection  
### Question 23  
**What determines where projected content appears inside a component?**  
1. The component’s parent template  
2. The position of `<ng-content>` inside the component template  
3. The order in which components are declared in the module  
4. The selector of the parent component  

**Correct answer:** 2


### Question 24  
**What happens to projected content when the receiving component is destroyed?**  
1. It persists in memory until manually removed  
2. It is moved to the root view  
3. It is destroyed along with the component that owns it  
4. It is cached for reuse across components  

**Correct answer:** 3


### Question 25  
**What does `contentChild()` allow a component to do?**  
1. Access its own view children  
2. Traverse up the component hierarchy  
3. Locate a directive or component projected *into it*  
4. Create embedded views manually  

**Correct answer:** 3


---

## Module 07 - Templates & Structural Directives  
### Question 26  
**What is the purpose of `<ng-container>`?**  
1. To create an invisible grouping element that does not appear in the DOM  
2. To project content into a child component  
3. To declare a structural directive  
4. To enforce view encapsulation  

**Correct answer:** 1


### Question 27  
**What does `ViewContainerRef` allow you to do?**  
1. Modify component styles dynamically  
2. Perform structural DOM operations like inserting or removing views  
3. Create new CSS encapsulation rules  
4. Register global event listeners  

**Correct answer:** 2


### Question 28  
**What does the `*` syntax (e.g., `*ngIf`) represent in Angular?**  
1. A way to access private component members  
2. A performance optimization for change detection  
3. Syntactic sugar that wraps the content in an `<ng-template>`  
4. A signal-based rendering shortcut  

**Correct answer:** 3

### Question 29  
**What does `*ngTemplateOutlet` allow you to do?**  
1. Inject parent data into child components  
2. Programmatically destroy component views  
3. Render a template and optionally pass it a context  
4. Create a new host view for a component  

**Correct answer:** 3

### Question 30 
**What is the purpose of using `let-xxx` inside an `<ng-template>`?**  
1. To declare a local variable that receives a value from the template’s context  
2. To trigger change detection manually  
3. To bind the variable to the component’s host element  
4. To create a structural directive  

**Correct answer:** 1


### Question 31  
**What does the `$implicit` property represent in a template’s context?**  
1. The root component instance  
2. A reserved variable name for Angular lifecycle hooks  
3. The default value assigned to `let-xxx` when no property name is specified  
4. The template’s dependency injection token  

**Correct answer:** 3

## Module 08 – Theming Angular & Material 
### Question 32  
**What do CSS custom properties allow you to do in Angular theming?**  
1. Create reusable variables that can be read with `var()`  
2. Automatically generate Material color palettes  
3. Replace all SCSS mixins  
4. Remove the need for component styles  

**Correct answer:** 1


### Question 33  
**Why do we generate palette shades using `color-mix()`?**  
1. To avoid shading and use fixed values only  
2. To produce many shades from a small set of core variables  
3. Because SCSS variables cannot store colors  
4. Because Angular requires it for theming  

**Correct answer:** 2


### Question 34  
**What does the relative color syntax allow (e.g., `hsl(from var(--primary) ...)`)?**  
1. Automatically generate complementary or shifted colors  
2. Disable color inheritance  
3. Convert HSL to RGB  
4. Replace SCSS color functions  

**Correct answer:** 1


### Question 35  
**What does `color-scheme: light dark` enable?**  
1. Forces dark mode only  
2. Allows Material to switch theme automatically  
3. Lets the browser pick light or dark mode based on system settings  
4. Disables CSS custom properties  

**Correct answer:** 3


### Question 36  
**What does `light-dark()` help you define?**  
1. A list of available colors  
2. Generate lighter and darker variations of colors  
3. Automatic light/dark background & foreground values  
4. Per-component themes only  

**Correct answer:** 3


### Question 37  
**How can the user dynamically change the primary color in the UI?**  
1. Modify SCSS variables at build time  
2. Use an `<input type="color">` bound to a signal that updates `--primary`  
3. Load a new .SCSS file in typescript  
4. Switch Angular environments

**Correct answer:** 2

## Module 09 – Angular Material & CDK Essentials 
### Question 38  
**What does `ng add @angular/material` do automatically?**  
1. Only installs Material  
2. Adds fonts, meta tags, and updates styles + package.json  
3. Creates Material theme in the project  
4. Enables animations and font hosting

**Correct answer:** 2


### Question 39  
**Why are Material Symbols recommended over the old Material Icons?**  
1. They load faster but have limited variants  
2. They allow control over thickness, fill, and weight using font-variation settings  
3. They are based on vectors while the old ones are pixel based  
4. They do not require CDK and can be set with custom properties  

**Correct answer:** 2


### Question 40  
**What does `MatIconRegistry` allow you to do?**  
1. Register and use custom SVG icons  
2. Create standalone components  
3. Override all Material themes  
4. Disable font icons entirely  

**Correct answer:** 1


### Question 41  
**What is required for virtual scrolling to work correctly?**  
1. A dynamic item size  
2. That the viewport is in display flex with direction column 
3. A fixed item size and a viewport with fixed dimensions  
4. Using ChangeDetection.OnPush  

**Correct answer:** 3


### Question 42  
**What does `cdkDropListDropped` provide in Drag & Drop?**  
1. The full history of drag events  
2. A DOM reference to the dragged element  
3. The previous and current index to reorder items  
4. A new Material theme token  

**Correct answer:** 3


### Question 43  
**How do you open a Material dialog and receive a result?**  
1. Call `new Dialog()` and poll for data  
2. Use `mat-dialog` inside the template  
3. Call `matDialog.open(...)` and subscribe to `afterClosed()`  
4. Instantiate the dialog component manually  

**Correct answer:** 3

## Module 10 - NgRX Signal Store
### Question 44  
**What is the core philosophy behind NgRx Signal Store?**  
1. Managing fully mutable objects directly in services  
2. Keeping state as a single immutable object updated predictably  
3. Allowing random cross-updates across many isolated signals  
4. Storing all component data inside Angular templates  

**Correct answer:** 2


### Question 45  
**What is the meaning of a “feature” in a signal store?**  
1. A single helper function that runs once on startup  
2. A partial constructor that adds pieces of state or logic  
3. A standalone class that replaces the entire store  
4. A decorator that assigns inputs to store methods  

**Correct answer:** 2


### Question 46  
**Why does the store isolate logic into pure functions?**  
1. To ensure mixing UI code and state code is simple  
2. To make updates predictable and easy to test  
3. To allow methods to read global state values  
4. To replace the need for any computed signals  

**Correct answer:** 2


### Question 47  
**What does `rxMethod` help you achieve inside a signal store?**  
1. Handling async method calls as a single synchronous operation  
2. Turning method calls into a controlled observable pipeline  
3. Replacing the need for any HTTP client logic  
4. Updating state only when signals change automatically  

**Correct answer:** 2


### Question 48  
**How does `rxMethod` help avoid race conditions?**  
1. By executing all requests at the same time without limits  
2. By managing requests through an operator chain like switchMap  
3. By blocking new events until old ones complete  
4. By disabling async logic when multiple calls occur  

**Correct answer:** 2


### Question 49  
**Why can the store hook `onInit` inject services?**  
1. It runs before Angular creates the injection system  
2. It executes inside a valid injection context by design  
3. It bypasses Angular’s dependency resolution rules  
4. It triggers injection only when no effects are used  

**Correct answer:** 2


### Question 50  
**What is the role of a custom store feature like `withSessionStorage`?**  
1. Adding browser APIs directly into the component template  
2. Extending a store with reusable behavior such as syncing state  
3. Replacing the need for computed signals and methods  
4. Injecting components into the store automatically  

**Correct answer:** 2


### Question 51  
**How does a custom feature typically modify the store?**  
1. By overwriting the existing store instance completely  
2. By attaching behavior to the store object that it receives  
3. By returning grouped store features that are added to the feature chain  
4. By deleting built-in features before adding new ones  

**Correct answer:** 3


### Question 52  
**What does `withProps` allow inside a store definition?**  
1. Passing template inputs directly into the store API  
2. Injecting external dependencies such as HttpClient  
3. Creating new selectors without using computed signals  
4. Registering a store without using Angular modules  

**Correct answer:** 2

## Module 11 – The new Signal Forms
### Question 53  
**What is the main design philosophy behind Signal Forms in Angular 21?**  
1. Treating forms as reactive structures driven entirely by signals  
2. Managing validation using imperative checks inside components  
3. Building form logic through decorators that mirror component inputs  
4. Storing all form state directly inside template-driven bindings  

**Correct answer:** 1


### Question 54  
**Why do simple scenarios become easier with Signal Forms?**  
1. Because form fields no longer require their own component wrappers  
2. Because the form creates a reactive field tree automatically at startup  
3. Because the validation rules are locked to a single global schema  
4. Because template inputs no longer accept dynamic data bindings  

**Correct answer:** 2


### Question 55  
**How does the `[field]` directive connect an input to the form model?**  
1. It injects metadata tokens directly into the form’s core model  
2. It creates a two-way binding between the input's value and the model's state  
3. It replaces native events with synthetic handlers for each control  
4. It forces the input element to rebuild its internal state on each change  

**Correct answer:** 2


### Question 56  
**What does schema validation provide inside Signal Forms?**  
1. A way to define core validation logic without mixing UI behavior  
2. A mechanism that disables validators when metadata is active  
3. A shortcut for attaching animation rules to nested form controls  
4. A process where validators run only after submission is complete  

**Correct answer:** 1


### Question 57  
**How do custom validators defined with `validate()` behave?**  
1. They run reactively and return structured error objects when necessary  
2. They override all built-in validators defined earlier inside the schema  
3. They evaluate only once to avoid unnecessary re-computation  
4. They require explicit subscriptions to propagate error updates  

**Correct answer:** 1


### Question 58  
**What role does SchemaPath play in cross-field validation?**  
1. It generates a parallel metadata structure for advanced UI rendering  
2. It marks unrelated fields as pending while validation is running  
3. It stores extra information needed for optional validators  
4. It identifies the exact fields that should participate in multi-field rules  

**Correct answer:** 4


### Question 59  
**How does the `hidden()` rule affect a form field?**  
1. It excludes the field from validation but preserves its model value  
2. It removes the field from the underlying model and resets its state  
3. It disables all metadata signals until the field becomes visible  
4. It hides the field from the UI automatically  

**Correct answer:** 1


### Question 60  
**How does extending the `field` directive enhance UI customization?**  
1. It replaces the form’s original field object with a simplified version  
2. It injects template-bound metadata while suppressing validation logic  
3. It adds global UI-related behaviors while leaving the form logic untouched  
4. It moves all rendering decisions into a globally shared component  

**Correct answer:** 3


### Question 61  
**What benefit does a reusable `<app-field>` wrapper component provide?**  
1. It automatically builds validation rules from the current field values  
2. It standardizes common UI elements such as labels and error messages  
3. It converts form fields into independent custom control instances  
4. It merges metadata definitions from unrelated schema sections  

**Correct answer:** 1

### Question 62  
**What happens during the submit process in Signal Forms?**  
1. The form becomes disabled and `submitting()` reflects progress until completion
2. The form resets all fields and clears validation before any logic runs  
3. The runs the submit logic and if it returns a list of errors in reflects them in the state.  
4. The form ignores async errors and forwards values directly to the model  

**Correct answer:** 3


### Question 63  
**What is the purpose of metadata tokens in Signal Forms?**  
1. Storing global validation rules that override schema-level logic  
2. Preventing fields from showing dynamic changes in nested templates  
3. Providing reactive Schema hints such as descriptions or formatting details  
4. Isolating control logic so fields cannot read values from the model  

**Correct answer:** 3


### Question 64
**How is metadata used inside a reusable `<app-field>` component?**  
1. It exposes dynamic hints and UI behavior that update through signals  
2. It injects global state so the wrapper overrides all field settings  
3. It forces the wrapper to rebuild controls every time metadata changes  
4. It replaces built-in validation signals with template-driven checks  

**Correct answer:** 1

