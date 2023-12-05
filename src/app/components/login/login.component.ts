import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loader: boolean = false;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private alert: AlertServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loader = true;
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe((isLogged) => {
        console.log(isLogged)
       
        if (isLogged) {
          this.loader = false;
          this.router.navigate(['/dashboard']);
        } else {
          this.loader = false;
          this.alert.genericSwal(
            'Error',
            'Las credenciales son incorrectas',
            'error'
          );
        }
      });
    }
  }
}
