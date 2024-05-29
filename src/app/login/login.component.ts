import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { User } from '../user';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NgIf, NgFor, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected to styleUrls
})
export class LoginComponent implements OnInit {
  login!: FormGroup;

  get email() {
    return this.login.get('email');
  }

  get password() {
    return this.login.get('password');
  }

  get role() {
    return this.login.get('role');
  }

  printdata: string = "";

  constructor(private fb: FormBuilder, private registerservice: RegisterService, private router: Router) {}

  ngOnInit() {
    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  submit() {
    console.log(this.login.value);
    const { email, password, role } = this.login.value;
    this.registerservice.login(this.login.value as User).subscribe(
      (m) => {
        console.log(m);
        localStorage.setItem('authorization', m);
        if (role === 'user') {
          this.router.navigate(['/usersidebar']);
        } else {
          this.router.navigate(['/adminsidebar']);
        }
      },
      (error) => {
        this.printdata = error;
      }
    );
    this.login.reset();
  }
}
