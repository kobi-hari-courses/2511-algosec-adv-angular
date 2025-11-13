# Module 08 - Theming Angular & Material

## Projects:

|                                                  |                                       |
| ------------------------------------------------ | ------------------------------------- |
| [fun with theming](./projects/fun-with-theming/) | Theming Anuglar using CSS Custom properties |

---
## Summary

### Custom Properties Basics
We introduced CSS custom properties, how inheritance works, and how to read them with `var()`.
Example:

```css
:root {
  --primary: #3f51b5;
}

button {
  background: var(--primary);
}
```

### Building Theme Palettes
We created three palettes - primary, accent, neutral - each with `--xx-00` to `--xx-100`.

```css
:root {
  --p-00: #e8eaf6;
  --p-50: #3f51b5;
  --p-100: #1a237e;
}
```

### Generating Palettes with color-mix()
Instead of manually writing all 33 entries, we defined four core variables and generated them.

```css
:root {
  --primary: #3f51b5;
  --background: white;
  --foreground: black;

  --p-50: color-mix(in srgb, var(--primary) 80%, var(--background));
  --p-100: color-mix(in srgb, var(--primary) 60%, var(--foreground));
}
```

### Auto-Generating Accent with Relative Color
We created a complementary color automatically by shifting hue 180 degrees.

```css
:root {
  --primary: hsl(220 80% 50%);
  --accent: hsl(from var(--primary) h calc(h + 180) s l);
}
```

### Theme Modes with color-scheme
We used `color-scheme` to enable light/dark modes.

```css
:root {
  color-scheme: dark;
}
```

### Using light-dark() for Background/Foreground
```css
:root {
  --background: light-dark(#ffffff, #121212);
  --foreground: light-dark(#000000, #ffffff);
}
```

### System-Controlled Mode
When using `color-scheme: light dark`, the browser decides the active mode.

### User-Selectable Primary Color
We let the user change `--primary` dynamically.

```html
<input type="color" [(ngModel)]="primarySignal" />
```
