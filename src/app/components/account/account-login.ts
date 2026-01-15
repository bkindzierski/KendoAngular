import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,  Validators,} from '@angular/forms';

import { ButtonFillMode, ButtonRounded, ButtonSize, ButtonThemeColor, KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { Subscription } from 'rxjs';
import { KENDO_INPUTS,InputFillMode,  InputRounded,  InputSize } from "@progress/kendo-angular-inputs";
import { KENDO_ICONS } from "@progress/kendo-angular-icons";
import { KENDO_LABELS } from "@progress/kendo-angular-label";
import { routes } from '../../app.routes';
import { Router, RouterOutlet } from '@angular/router';
import {  eyeIcon,  eyeSlashIcon,  envelopeIcon,  lockIcon,  SVGIcon,  loginIcon} from "@progress/kendo-svg-icons";

@Component({
  selector: 'app-account-login',
  imports: [ReactiveFormsModule,KENDO_BUTTONS,KENDO_INPUTS,KENDO_LABELS,KENDO_ICONS],
  templateUrl: './account-login.html',
  styleUrl: './account-login.scss',
})
export class AccountLogin {
  form: FormGroup
  formChangesSubscription!: Subscription;

  username: { get; set; }
  password: {get; set;}
  public showPassword: boolean = false;
  public eyeSvg: SVGIcon = eyeIcon;
  public eyeSlashSvg: SVGIcon = eyeSlashIcon;
  public envelopeSvg: SVGIcon = envelopeIcon;
  public lockSvg: SVGIcon = lockIcon;


  constructor(private router: Router){

  }

  ngOnInit(): void {
    // Initialize the FormGroup with FormControls
    this.form = new FormGroup({
      // Define form controls and their initial values 
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
     
    });

    // this.formChangesSubscription = this.form.valueChanges.subscribe(changes => {
    //   console.log('Form value changed:', changes);
    //   // You can implement custom logic here, like saving data or updating the UI
    // });
}
  
   onSubmit(): void{
   
    if (this.form.valid && this.form.get('email').value == 'Briank@me.com' && this.form.get('password').value == '123445') {
      this.form.reset();
      this.showPassword = false;
      this.router.navigate(['/landing']);
    }
    // if (this.form.get('email').value == 'Briank@me.com' && this.form.get('password').value == '123445'){
    //   console.log('logged in as : ', this.form.get('username').value);
    //   this.router.navigate(['/landing']);
    // }  
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
