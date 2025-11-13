# Module 09 - Anuglar Material and CDK Essentials

## Projects:

|                                                  |                                       |
| ------------------------------------------------ | ------------------------------------- |
| [fun with material](./projects/fun-with-material/) | playing with Angular Material, Theming and the CDK |

---
### Adding Angular Material
We added Angular Material using:

```bash
ng add @angular/material
```

This automatically updated:
- **index.html** - added Material fonts and meta tags  
- **styles.scss** - added the default Material theme  
- **package.json** - installed Material + CDK

```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
```

### Self‑Hosting Fonts
We installed fonts locally:

```bash
npm install roboto-fontface
```

And added them via `angular.json`:

```json
{
  "styles": [
    "node_modules/roboto-fontface/css/roboto/roboto-fontface.css"
  ]
}
```

We also self‑hosted **Material Icons** the same way.

### Material Symbols (Recommended)
Material Symbols give flexible control using font‑variation settings:

```css
.material-symbols {
  font-variation-settings:
    'FILL' 1,
    'wght' 400
}
```

Example usage:

```html
<mat-icon fontSet="material-symbols-rouded">home</mat-icon>
```

You can adjust thickness and fill dynamically.

### Using the MatIconRegistry
We set default font sets and registered SVG icons.

```ts
constructor() {
  readonly matIconRegistry = inject(MatIconRegistry);
  readonly sanitizer = inject(DomSanitizer);  
  iconRegistry.setDefaultFontSetClass('material-symbols-rounded');

  iconRegistry.addSvgIcon(
    'app-logo',
    sanitizer.bypassSecurityTrustResourceUrl('icons/logo.svg')
  );
}
```

Usage:

```html
<mat-icon svgIcon="app-logo"></mat-icon>
```

### Buttons & Theming
We experimented with the different button variants by creating CSS rules that modify the theme per CSS selector

```scss
[color='primary'] {
  @include mat.theme(
    (
      color: (
        primary: mat.$azure-palette,
      ),
    )
  );
}
```

then we can use it as follows: 

```html
<button mat-raised-button color="primary">Primary</button>
<button mat-stroked-button color="accent">Accent</button>
<button mat-icon-button>
  <mat-icon>home</mat-icon>
</button>
```

We observed how theme palettes affect both the button and its icons.

## Components Overview

### Card
We explored layout using built‑in card regions:

```html
<mat-card>
  <mat-card-header>
    <mat-card-title>Title</mat-card-title>
    <mat-card-subtitle>Subtitle</mat-card-subtitle>
  </mat-card-header>

  <mat-card-content>
    Card body text goes here.
  </mat-card-content>

  <mat-card-actions>
    <button mat-button>Action</button>
  </mat-card-actions>
</mat-card>
```

### Dialog
We created a dialog component:

```ts
this.dialog.open(MyDialogComponent, {
  data: { name: 'Kobi' }
}).afterClosed().subscribe(result => {
  console.log(result);
});
```

Inside dialog:

```ts
  readonly inputData = inject(MAT_DIALOG_DATA) as NamesDialogInput;
  readonly dialogRef = inject(MatDialogRef) as MatDialogRef<NamesDialog, NamesDialogOutput>;


close() {
  this.dialogRef.close({val: 'some value'});
}
```

### Dialog template:

```html
<h2 mat-dialog-title>Hello {{ data.name }}</h2>
<mat-dialog-content>
  Content goes here.
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button (click)="close()">Close</button>
</mat-dialog-actions>
```

## CDK Essentials

### Virtual Scrolling

```html
<cdk-virtual-scroll-viewport itemSize="50">
  <div *cdkVirtualFor="let item of items">{{ item }}</div>
</cdk-virtual-scroll-viewport>
```

Important:
* Must set items size so that the scroller knows how much height each item needs
* The CDK viewport must have a fixed size that does not depend on content

### Drag & Drop

```html
<div cdkDropList (cdkDropListDropped)="drop($event)">
  <div *ngFor="let item of items" cdkDrag>{{ item }}</div>
</div>
```

```ts
drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(event.previousIndex, event.currentIndex);
}
```

This allowed dragging items within the list and between lists.


