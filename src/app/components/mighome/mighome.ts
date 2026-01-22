import { Component,ViewEncapsulation,ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_LAYOUT, StepperComponent } from "@progress/kendo-angular-layout";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_LABEL } from "@progress/kendo-angular-label";
import { Appbar } from '../appbar/appbar';

@Component({
  selector: 'app-mighome',
  imports: [Appbar,ReactiveFormsModule,KENDO_LAYOUT,KENDO_LABEL,KENDO_INPUTS,KENDO_BUTTONS],
  templateUrl: './mighome.html',
  styleUrl: './mighome.scss',
})
export class Mighome {
  
  
  constructor(){

  }

  public  ngOnInit(): void{  
    
  }



}
