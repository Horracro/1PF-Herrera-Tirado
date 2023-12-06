import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent  implements OnInit {
  characterForm!: FormGroup;
  loader:boolean = false
  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<ModalFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  ngOnInit() {
  
    if (this.data && this.data.character && this.data.character.nombre) {
      
      this.characterForm = this.fb.group({
        nombre: [this.data.character.nombre, Validators.required],
        raza: [this.data.character.raza, Validators.required],
        course_id: [this.data.character.course_id, Validators.required],
        region: [this.data.character.region, Validators.required],
        principalStat: [this.data.character.principalStat, Validators.required]
      });
    } else {
   
      this.characterForm = this.fb.group({
        nombre: ['', Validators.required],
        raza: ['', Validators.required],
        course_id: ['', Validators.required],
        region: ['', Validators.required],
        principalStat: ['', Validators.required]
      });
    }
  }

  onSubmit() {
    if (this.characterForm.valid) {
      const newCharacter = this.characterForm.value;
      this.dialogRef.close(newCharacter);
    }
  }
  closeModal(){
    this.dialogRef.close();
  }
}