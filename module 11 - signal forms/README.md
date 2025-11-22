# Module 11 - Angular 21 - Signal Forms!

## Projects:

|                                                  |                                       |
| ------------------------------------------------ | ------------------------------------- |
| [fun with signal forms](./projects/fun-with-signal-forms/) | Taking the Signal Forms for a ride |


## Philosophy
Signal Forms in Angular 21 are built entirely on **signals**, from the model itself to the schema, validation rules, metadata, and UI state.  
This design achieves a balance: everyday form scenarios become extremely simple to implement, while more complex and custom behaviors remain fully accessible through a low‑level, highly flexible API.  
Everything is reactive, everything updates automatically, and everything can be isolated into reusable pieces.

---

## Creating a Form
A form begins with a **writable signal** representing the model.  

```typescript
readonly model = signal({name: 'kobi', job: 'programmer'})
```

Then using the `form()` function:

```ts
readonly myForm = form(this.model);
```

Angular automatically builds a **tree of fields**, each representing part of the model’s structure.

### Updating the template
The `[field]` directive is used to connect UI inputs to the form:

```html
<input type="text" [field]="myForm.name">
```

This gives instant access to:

- the current value  
- validity and error information  
- touched/dirty state  
- disabled logic  
- metadata  
- reactive updates  

No configuration is needed - the directive already knows how to talk to the signal model behind the scenes.

---

## Schema and Validation
The second parameter the `form` function receives is a function that builds the schema rules. We defined schema rules using built‑in validators  such as:

```ts
readonly myForm = form(this.model, p => {
    required(p.username);
    minLength(p.username, 3);
    pattern(p.role, /[A-Z].*/);
})
```

Schema defines **core validation logic**, separate from the UI.  
The form automatically exposes state signals:

* invalid
* touched
* dirty
* pending (for async validation)
* submitting (for submit process)

These signals are set in each nesting level, and let us control UI behavior:

```html
<button [disabled]="myForm().invalid()">Submit</button>
```

We also generated dynamic CSS classes based on validity,  
allowing error highlighting and visual feedback to be purely declarative.

---

## Custom Validators
We built custom validators using `validate()` and `customError()`:

```ts
validate(p.username, ctx => {
    // do something with ctx to extract the value
    return customError({
        kind: 'my error', 
        message: 'There was an error, basa'
    })
});
```

We also grouped multiple related rules using the `schema()` function and reused them with `apply()`,  
which helps keep schemas modular and maintainable.

---

## SchemaPath and Cross‑Field Validation
We introduced **SchemaPath**, a way to describe and reference specific parts of the form.  
This enables validation scenarios that depend on multiple fields.

Examples:

- Compare two fields (password + confirm)  
- Validate based on relationships (startDate < endDate)  
- Apply errors to multiple fields at once  

Using `validateTree()`, we created a rule that inspects two fields together and marks errors in both places if necessary.

---

## Hidden Fields
Using `hidden()`, we can dynamically remove fields from both UI and validation:

```ts
hidden(p.assistant, ctx => ctx.valueOf(p.needsAssistant) === false);
```

A hidden field does not take part in validation but is not automatically hidden in the UI. You can use the state signal `hidden` to check if it was hidden and remove it.

---

## Extending the `field` Directive
We created a directive with the same selector as `field` to attach UI‑specific behavior automatically.  
This directive receives the same field object and adds things like classes, animations, or hints, without touching any form logic.

---

## Reusable Wrapper Component
We built a generic `<app-field>` wrapper component that standardizes UI:

- label display  
- required indicator  
- error message listing  
- only showing errors after the field is touched  

We found the `field` directive in the content and then bound to some of its signals

```html
<app-field>
  <input type="email" [field]="myForm.email">
</form-field>
```

It centralizes look & feel and removes repeated boilerplate.

---

## Form Arrays
Creating form arrays has become seamless.  
Unlike previous Angular versions where arrays had to be manually reconstructed,  
Signal Forms generate and update arrays directly from the signal model:

```ts
this.model.update(prev => ({
    ...prev, 
    comments: [
        ...prev.comments, 
        { content: '', user: ''}
    ]
}))
```

The form tree automatically tracks additions, removals, and updates — no manual wiring required. We can apply repeating validation rules and schema using the `applyEach` function.

To create it in the UI, we loop over the field, which is an iterable value. 

---

## Custom Controls
We created a fully custom control using only:

```ts
readonly value = model.required<T>();
```

The `[field]` directive integrates with this automatically.  
We can optionally expose additional inputs (`disabled`, `min`, `max`, etc.),  
and they are passed directly from the form field without any adapters.

---

## Submit Operations
We used the `submit()` function to run custom logic:

```ts
submit(this.myForm, async (ctx) => {
  await saveToServer(model());
  return [{ 
    field: ctx.email, 
    kind: 'server-reject', 
    message: 'Server rejected the email' }];
});
```

During submission:

- the form becomes disabled  
- `submitting()` reflects the progress  
- returning an error object shows it directly inside the form  

This simplifies async handling dramatically.

---

## Metadata
Metadata lets us attach UI‑related information to the schema:

- hints  
- descriptions  
- formatting rules  
- custom behavior indicators  

We read metadata using a `MetadataKey`:

```ts
metadata(HINT)
```
which returns a **signal**.

We then aggregated multiple metadata sources using `aggregateMetadata()`,  
and even created our own custom metadata tokens.

Because metadata is signal‑based,  
**the entire UI can change at runtime** depending on the model or application state.

---

## Summary
Signal Forms represent a major upgrade in how forms work in Angular:

- They are **signal‑driven**, so every part reacts automatically.  
- They make simple cases extremely straightforward.  
- They keep complex scenarios fully achievable via low‑level APIs.  
- They allow clean isolation of reusable logic:  
  custom schema, custom controls, custom validators, custom metadata, and shared UI wrappers.

The entire system is cohesive, reactive, and designed for real‑world flexibility with minimal code.

