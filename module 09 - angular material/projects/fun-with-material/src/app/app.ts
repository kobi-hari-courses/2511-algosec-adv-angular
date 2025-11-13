import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { NamesDialog } from "./dialogs/names-dialog/names-dialog";
import { Dialog } from '@angular/cdk/dialog';
import { DialogService } from './services/dialog-service';
import { firstValueFrom } from 'rxjs';
import { colors1, colors2, NAMES } from './add-data';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    MatCardModule, NamesDialog, ScrollingModule, DragDropModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('fun-with-material');
  readonly dialogsService = inject(DialogService);
  readonly bigArray = NAMES;


  readonly name = new FormControl('', Validators.required);

  readonly firstList = signal(colors1);
  readonly secondList = signal(colors2);


  async onGetNames() {
     const res = await firstValueFrom(this.dialogsService.getUserNames({
       firstName: 'John',
       lastName: 'Doe'
     }));

     console.log('Dialog result:', res);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;

    console.log('Drop event:', event);

    const item = this.firstList()[previousIndex];
    this.firstList.update(list => {
      return [...list.filter((_, idx) => idx !== previousIndex)];
    });

    this.secondList.update(list => {
      return [...list.slice(0, currentIndex), item, ...list.slice(currentIndex)];
    });
  }
}
