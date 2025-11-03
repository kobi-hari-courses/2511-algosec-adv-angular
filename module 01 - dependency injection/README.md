# Introduction to Dependency Injection
## Projects:
|     |     |
| --- | --- |
| [DI](./projects/fun-with-di/) | Dependency Injection in Angular 20- |

### Introduction to Dependency Injection 
* We talked about the motivation to use a dependency injection infrastructure
* We saw how to create a service - an object encapsulating a bit of logic and perhaps data
* We defined the terms:
    * **Consumer** - the object that requires dependency
    * **Injection request / token** - The item that the consumer asks for, to be provided using dependency in the constructor
    * **Injector** - An object responsible for resolving (providing, injecting) the injection request
    * **Provider** - The algorithm, or logic, used to resolve the injected object
* We saw how to define injecter and provider using the `providers` property of the `config`, or Component
* We understood the effect of defining a component as injector, and how to use the component hierarchy as injector hierarchy
* We saw how to define a provider that used another class instead of the requested class
* We saw other types of providers:
  * `useClass` - defines a class provider, essentialy calling `new` to instantiate an object
  * `useValue` - provide an already created value
* We saw examples of 2 additional providers: 
  * `useExisting` - provides the value of a different request / token
  * `useFactory` - calls a function to calculated the provided value
* We saw how to define a service as Injectable so it can also consume dependencies
  * We talked about the **Tree Shaking** Algorithm and how to define "tree shakable" services

### Advanced DI
* The `Injector` is an object that we can inject on our own and use it programatically.
    * We inject it by using the `Injector` token
    * We can use it to get instances of objects per token.
* There are other types of "requests" or "token".
    * We can create a new constant of type  `InjectionToken` to serve as alternative token.
    * We can use the `useValue` and `useFactory` providers to set the value of the token
    * We consume the token using the `@Inject` decorator
  
### The `DestroyRef` object
* We saw that we now no longer need the `OnDestroy` lifecycle hook, and instead can use the `DestroyRef`
* We saw how to use it to register cleanup logic
* We saw that every injector has this feature, so it is not neccessarily a component feature

### The `inject` function
* Starting with angular 14, we can inject using the `inject` function instead of using constructor parameters
* We saw that we can only use it during "injection context" which means that it can only be called when we are inside a constructor or initializer.
* We saw that we can "trigger" an artifical injection context by storing the `Injector` and then calling the `runInInjectionContext` function
* We saw that util functions can use this approach to implement their own cleanup logic using the `DestroyRef`

#### Injection Tokens
- In angular, not just services can be injected
    - You can inject parent component into its children
    - You can inject directives placed on the same host, or higher in the hierarchy into the component
    - You can inject `DestroyRef`
    - You can inject the `Injector` itself
- In angular, also constants, configuration values and even functions  are injectable
    - The problem is that you can not use `string`, `number` and `() => void` as injection token
- You can use the class `InjectionToken<T>` to define a custom injection token

```typescript
const MY_VALUE = new InjectionToken<string>('MY_VALUE');
```

- You can set the value using a provider

```typescript
providers: [
    {provide: MY_VALUE, useValue: 'Hello World'}
]
```

- You could inject it using the `@Inject` decorator.
- But now - better way - you can inject it using the `inject` function

```typescript
class MyComponent {
    readonly myValue = inject(MY_VALIUE);
}
```

- Typescript can infer the type of the value from the generic type of the injection context

#### Injection into functions
- One of the benefits of the `inject` function is that it allows us to write functions that use **Depenency Injection**
- You can write utility functions that take care of their own dependency injection
- For example, we saw a function that starts an interval and runs a lambda every second
    - The function needs the injection context (specifically the `DestroyRef` in order to know when to stop)
    - It Uses the `inject` function to fetch the destroy ref and register cleanup logic
- We saw that in order to allow the function to be optionally ran outside injection context, it can optionally receive the destroy ref in the parameters.
- We saw how to define the parameters so that the function can either be called in injection context, or explicitly receive the dependency:

```typescript
function everySecond(destroyRef: DestroyRef = inject(DestroyRef)) {
    // logic that uses destroyRef
}
```




### Signal Effects
* We saw how to react to signals using `effect`
* We understood that you cannot call effect anywhere but in the constructor, becuase the effect requires injection context


