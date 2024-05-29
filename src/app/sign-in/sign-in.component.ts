import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { User } from '../user';
import { RegisterService } from '../register.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ReactiveFormsModule, CommonModule, NgIf, NgFor],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'] // Corrected to styleUrls
})
export class SignInComponent implements OnInit {
  signin!: FormGroup;
  printdata: string = "";

  constructor(
    private fb: FormBuilder,
    private registerservice: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  get email() {
    return this.signin.get('email');
  }

  get password() {
    return this.signin.get('password');
  }

  get role() {
    return this.signin.get('role');
  }

  submit(): void {
    if (this.signin.invalid) {
      return;
    }

    console.log(this.signin.value);
    this.registerservice.register(this.signin.value as User).subscribe(
      (m) => {
        console.log(m);
        this.router.navigate(['/login']);
      },
      (error) => {
        this.printdata = error.error.message || 'Registration failed';
      }
    );

    this.signin.reset();
  }
}
