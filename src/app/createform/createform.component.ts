import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgbNavModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { AppData } from '../myapplication';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-createform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, NgbToastModule, NgbNavModule, NgIf, NgFor],
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent {
  appCreateForm: FormGroup;
  apps: AppData[] = [];
  show: boolean = false;
  autohide: boolean = true;
  genres: string[] = ['Games', 'Beauty', 'Health', 'Sports', 'Women'];

  constructor(private fb: FormBuilder, private homeService: HomeService,private location:Location, private router: Router) {
    this.appCreateForm = this.fb.group({
      appName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      releaseDate: [ [this.getCurrentDate(), [Validators.required]],
    ],
      version: ['1.0.0', Validators.required],
      genre: ['', Validators.required],
      visibility: [true, Validators.required],
      imagepath: [
        'https://example.com/default-image.png',
        [Validators.required]
      ],
    });
  }

  get appName() {
    return this.appCreateForm.get('appName');
  }
  get description() {
    return this.appCreateForm.get('description');
  }
  get releaseDate() {
    return this.appCreateForm.get('releaseDate');
  }
  get version() {
    return this.appCreateForm.get('version');
  }
  get genre() {
    return this.appCreateForm.get('genre');
  }
  get visibility() {
    return this.appCreateForm.get('visibility');
  }



  close() {
    this.show = false;
    setTimeout(() => (this.show = true), 3000);
  }

  // getCurrentDate(): string {
  //   const currentDate = new Date();
  //   return currentDate.toISOString().slice(0, 10);
  // }

  getCurrentDate(): string {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  }

  add() {
    if (this.appCreateForm.valid) {
      const { appName, description, releaseDate, version, genre, visibility,imagepath } = this.appCreateForm.value;
     this.homeService.addapp({
        app_Name: appName,
        description,
        releaseDate: releaseDate,
        version,
        genre,
        visibility,
        user_id: 'defaultUserId',  
        id: Date.now(),  
        downloadCount: 0,  
        comments: [],  
        averageRating: 0,  
        imgpath: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6fd099b0-aa2f-4428-9038-cbe5da9bf5cd_1200x800.png'  
     })

      .subscribe((app: AppData) => {
        this.apps.push(app);
        this.show = true;
        this.appCreateForm.reset({
         
          releaseDate: this.getCurrentDate(),
          version: '1.0.0',
          imagepath:'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6fd099b0-aa2f-4428-9038-cbe5da9bf5cd_1200x800.png',
          visibility: true,
        });
        this.router.navigate(['/home'])
      });
    }
  }

goback(): void {
  this.location.back();
}

onSubmit() {
  this.add();
  }
}