import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string;
  email: string;
  dob: Date;
  password: string;
  passwordConfirm: string;

  constructor(private http: HttpClient) {}

  onSignup() {

    if(this.password == this.passwordConfirm){
      this.http.post('http://localhost:5000/auth/signup', {
      name: this.name,
      email: this.email,
      dob: this.dob,
      password: this.password,
    }).subscribe(
      res => console.log(res),
      err => console.log(err),
    );
    }
    else{
     console.log("dob mismatch");
    }
  }
  ngOnInit() {
  }

}
