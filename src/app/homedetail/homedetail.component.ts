import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';
import { AppData } from '../myapplication';
import { NgbCarouselModule, NgbRatingModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-homedetail',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, NgbRatingModule, NgbCarouselModule],
  templateUrl: './homedetail.component.html',
  styleUrls: ['./homedetail.component.css']
})
export class HomedetailComponent implements OnInit {

  images: string[] = []; 
  app?: AppData;

  constructor(
    private homeservice: HomeService,
    private route: ActivatedRoute,
    private location: Location,
    config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.getallappdetails();
    this.loadImages(); 
  }

  getallappdetails(): void {
    const id1 = Number(this.route.snapshot.paramMap.get('id'));
    this.homeservice
      .getallappdetails(id1)
      .subscribe((app) => (this.app = app));
  }


  goback(): void {
    this.location.back();
  }

  loadImages(): void {
    // Example of loading images
    this.images = [
      'https://picsum.photos/id/237/900/500',
      'https://picsum.photos/id/238/900/500',
      'https://picsum.photos/id/239/900/500'
    ];
  }
}
