import { Component,Input, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { KENDO_UPLOADS, FileRestrictions,} from "@progress/kendo-angular-upload";
import {
  InputsModule,
  InputType,
  KENDO_INPUTS,
  TextBoxComponent,
} from "@progress/kendo-angular-inputs";
import { KENDO_LABEL } from "@progress/kendo-angular-label";
import { eyeIcon, eyeSlashIcon, SVGIcon } from "@progress/kendo-svg-icons";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
//import { HttpClientModule } from "@angular/common/http";


@Component({
  selector: 'app-accountdetails',
  imports: [ ReactiveFormsModule,KENDO_LABEL,KENDO_INPUTS,KENDO_UPLOADS,KENDO_BUTTONS],
  templateUrl: './accountdetails.html',
  styleUrl: './accountdetails.scss',
})
export class Accountdetails {

  public eyeIcon: SVGIcon = eyeSlashIcon;
  public passInputType: InputType = "password";
  public isHidden: boolean = true;

  @Input() public accountDetails: FormGroup;
  @ViewChild("password") public textbox: TextBoxComponent;

  
  constructor(){

  }

  public  ngOnInit(): void{  
    
  }

  public restrictions: FileRestrictions = {
    allowedExtensions: ["jpg", "jpeg", "png"],
  };

  public toggleVisibility(): void {
    const isHidden = this.passInputType === "password";
    this.eyeIcon = isHidden ? eyeIcon : eyeSlashIcon;
    this.passInputType = isHidden ? "text" : "password";
  }
  
}
