import { Component, Input, ViewEncapsulation } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_LABEL } from "@progress/kendo-angular-label";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_DATEINPUTS } from "@progress/kendo-angular-dateinputs"

@Component({
  selector: 'app-paymentdetails',
  imports: [ ReactiveFormsModule,KENDO_LABEL,KENDO_INPUTS,KENDO_BUTTONS,KENDO_DATEINPUTS],
  templateUrl: './paymentdetails.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './paymentdetails.scss',
})
export class Paymentdetails {

  @Input() public paymentDetails: FormGroup;
  public mask: string = "0000-0000-0000-0000";
  public cvcMask: string = "000";

  constructor(){

  }

  ngOnInit(){

  }
}
