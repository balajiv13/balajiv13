import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pass = '';
  public conpass = '';
  show!: boolean
  disp() {
    if (this.pass == this.conpass) {
      this.show = true
    }
    else {
      this.show = false
    }
  }


  constructor() {
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    Address: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    conpassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
  }
}