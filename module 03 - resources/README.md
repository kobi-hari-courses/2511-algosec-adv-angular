# Module 03 - Introduction to Resource APIs

## Projects:

|                                                  |                                       |
| ------------------------------------------------ | ------------------------------------- |
| [books store with resources](./projects/resources-books-store/) | Introduction to the basics of signals |

## `resource()` - bridging Promises to Signals
- The `resource()` function converts an **async operation (Promise)** into a **signal-based resource**.  
- It runs whenever dependencies inside params change (here `userId`).  
- It returns an object exposing reactive properties.

- Each time a dependency changes, the factory re-runs, creating a **new Promise**.
  ```ts
  const user = resource({
    params: () => ({userId: userId()}), 
    loader: options => fetch(`/api/users/${options.params.userId}`),
    defaultValue: null
    });
  ```
- The returned resource automatically handles updates when source signals change.
- `resource()` provides an **AbortSignal** to cancel in-flight Promises when new ones start.  
- This avoids race conditions and wasted network calls.

---

## 4) Reading Resource Properties
Each resource exposes reactive properties:
```ts
user.value();     // resolved data
user.error();     // error (if occurred)
user.isLoading(); // loading state
```
All are **signals**, automatically updated as the async state changes.

---

## `httpResource()` - simplifying HttpClient calls
- Built-in helper that wraps `HttpClient` to return a reactive resource.
  ```ts
  const todos = httpResource(() => `/api/todos/${listId()}`);
  ```
- Automatically tracks `isLoading`, `value`, and `error`.

- Since it uses `HttpClient` under the hood, `httpResource()` integrates naturally with Angular’s **HTTP interceptors** for authentication, logging, caching, etc.

- You can customize the HTTP request directly:
  ```ts
  const postTodo = httpResource(() => ({
    url: '/api/todos', 
    params: { taskList: listId()}, 
    method: 'POST' 
    }))
  ```
- Works with any HTTP verb, body, or query params.

---

## `rxResource()` - connecting to Observables
- The `rxResource()` bridges an **Observable** to a signal-based resource.
- It tracks and exposes `value`, `error`, and `isLoading` just like `resource()`.

## 9) Streaming with Resource (advanced)
- The `resource()` API supports streaming responses via the **`stream` option**, allowing progressive updates from a long-running request.
- Useful for chunked HTTP streams or incremental JSON updates, but requires more manual handling.

---

## Easier Streaming via `rxResource()` and WebSocket Observable
- For live updates (e.g., WebSocket), it’s simpler to wrap the socket in an Observable and use `rxResource()`
- This avoids the complexity of manual stream handling.

---

### Summary
- **`resource()`** bridges Promises to signals and handles cancellation.  
- **`httpResource()`** simplifies HTTP requests.  
- **`rxResource()`** connects Observables (for example, WebSockets) for streaming or live data.
