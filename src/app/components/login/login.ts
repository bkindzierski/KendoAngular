import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

form: FormGroup

constructor(){

}

ngOnInit(): void {
    // 2. Initialize the FormGroup with FormControls
    this.form = new FormGroup({
      // Define form controls and their initial values (e.g., '')
      username: new FormControl(''),
      password: new FormControl(''),
      //email: new FormControl('')
    });
  }
  
 onSubmit(): void{
  console.log('Form Submitted!', this.form.value)
 }
 
}
