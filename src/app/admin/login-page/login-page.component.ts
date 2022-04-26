import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../shared/services/auth.service";
import {User} from "../shared/interfaces/user";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  submitted = false;
  form!: FormGroup;
  message = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public auth: AuthService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if(params['isLogin']){
        this.message = 'Enter please login and password'
      }
      if(params['authFailed']){
        this.message = 'Session expired. Enter please login and password'
      }
    })

    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(7), Validators.required]]
    })
  }

  submit(){

    if(this.form.invalid) {
      return
    }

    this.submitted = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }


    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard']).then(()=>{})
      this.submitted = false
    }, () => {this.submitted = false})

    // this.form.setValue({email: '', password: ''})
  }

}
