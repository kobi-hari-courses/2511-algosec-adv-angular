import { inject, Injectable } from '@angular/core';
import { NamesDialogInput, NamesDialogOutput } from '../dialogs/names-dialog/names-dialog.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NamesDialog } from '../dialogs/names-dialog/names-dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  readonly matDialog = inject(MatDialog);

  getUserNames(inputData: NamesDialogInput): Observable<NamesDialogOutput | undefined> {
    const dialogRef = this.matDialog.open<NamesDialog, NamesDialogInput, NamesDialogOutput>(NamesDialog, {
      data: inputData, 
      disableClose: true,     
    });

    return dialogRef.afterClosed()
  }
  
}
