import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonFillMode, ButtonRounded, ButtonSize, ButtonThemeColor, KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { loginIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { Subscription } from 'rxjs';
import { KENDO_INPUTS,InputFillMode,  InputRounded,  InputSize } from "@progress/kendo-angular-inputs";
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { routes } from '../../app.routes';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,KENDO_BUTTONS,KENDO_INPUTS,KENDO_LABELS],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

form: FormGroup
formChangesSubscription!: Subscription;
//
public size: ButtonSize = "medium";
public rounded: ButtonRounded = "medium";
public fillMode: ButtonFillMode = "outline";
public themeColor: ButtonThemeColor = "primary";
public svgData: SVGIcon = loginIcon;
//textboxes
public tbfillMode: InputFillMode = "outline";

username: { get; set; }
password: {get; set;}
constructor(private router: Router){

}

ngOnInit(): void {
    // 2. Initialize the FormGroup with FormControls
    this.form = new FormGroup({
      // Define form controls and their initial values (e.g., '')
      username: new FormControl(''),
      password: new FormControl(''),
      //email: new FormControl('')
    });

    // this.formChangesSubscription = this.form.valueChanges.subscribe(changes => {
    //   console.log('Form value changed:', changes);
    //   // You can implement custom logic here, like saving data or updating the UI
    // });
}

 onSubmit(): void{
  //console.log('Form Submitted!', this.form.value)
  
  if (this.form.get('username').value == 'Briank' && this.form.get('password').value == '123445'){
    console.log('logged in as : ', this.form.get('username').value);
    this.router.navigate(['/landing']);
  }
  
 }
 
}
