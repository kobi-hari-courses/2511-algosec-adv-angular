import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NamesDialogInput, NamesDialogOutput } from './names-dialog.model';

@Component({
  selector: 'app-names-dialog',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './names-dialog.html',
  styleUrl: './names-dialog.scss',
  host: {
    '(keydown.enter)': 'onOk()'
  }
})
export class NamesDialog {
  readonly inputData = inject(MAT_DIALOG_DATA) as NamesDialogInput;
  readonly dialogRef = inject(MatDialogRef) as MatDialogRef<NamesDialog, NamesDialogOutput>;

  readonly form = new FormGroup({
    firstName: new FormControl(this.inputData.firstName, Validators.required),
    lastName: new FormControl(this.inputData.lastName, Validators.required),
  })

  onOk() {
    if (this.form.valid) {
      const res: NamesDialogOutput = {
        fullName: `${this.form.value.firstName} ${this.form.value.lastName}`.trim()      
      }

      this.dialogRef.close(res)
    }
  }

}
