import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { AppData } from '../myapplication';
import { NgClass, NgFor } from '@angular/common';
import { NgbPaginationModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgClass, NgbRatingModule, NgbPaginationModule, RouterModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  apps: AppData[] = [];
  rating = 3.14;

  constructor(private homeService: HomeService, private location: Location) {}

  ngOnInit(): void {
    this.getapp();
  }

  getapp(): void {
    this.homeService.getapp().subscribe((apps) => {
      this.apps = apps;
      this.apps.forEach(app => this.updateAverageRating(app));
    });
  }

  updateAverageRating(app: AppData): void {
    if (app.comments.length > 0) {
      const totalRating = app.comments.reduce((acc, comment) => acc + comment.rating, 0);
      app.averageRating = totalRating / app.comments.length;
    } else {
      app.averageRating = 0;
    }
  }

  delete(app:AppData):void{
    if(app.id!==undefined){
      this.apps = this.apps.filter((a)=> a!==app);
      this.homeService.deleteapp(app.id).subscribe();
    }
  }

  // ariaValueText(current: number, max: number): string {
  //   return `${current} out of ${max} hearts`;
  // }
}
