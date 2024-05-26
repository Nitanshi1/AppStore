import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AppData } from './app/myapplication';
@Injectable({
  providedIn: 'root'
})
export class InMemoryWebApiService implements InMemoryDbService{

  createDb(){
    const AppData=[
      {
      user_id: 'user1',
      id:1,
      app_Name: 'Meesho',
      description: 'Great Place to shop at lower price',
      releaseDate: new Date('2024-02-10'),
      version: 1,
      genre: 'Social',
      visibility: true,
      downloadCount: 12,
      imgpath:"https://bookface-images.s3.amazonaws.com/logos/55f65e74439c3542451db4aea92332fa3edd7bca.png",
      comments: [
        {
          user_id: 'user2',
          app_id: 'app1',
          content: 'Great app! Very useful.',
          rating: 4.5,
        },
        {
          user_id: 'user3',
          app_id: 'app1',
          content: 'Improvement Needed in UI.',
          rating: 4,
        },
      ],
      averageRating: 3.75,
    },
    {
      user_id: 'user2',
      id:2,
      app_Name: 'Myntra',
      description: 'One Platform to every fashion style.',
      releaseDate: new Date('2024-05-10'),
      version: 1,
      genre: 'Social',
      visibility: true,
      downloadCount: 5,
      imgpath:"https://logos-world.net/wp-content/uploads/2022/12/Myntra-Logo.png",
      comments: [
        {
          user_id: 'user1',
          app_id: 'app2',
          content: 'Latest Trends',
          rating: 4,
        },
      ],
      averageRating:4,
    },
    {
      user_id: 'user2',
      id:3,
      app_Name: 'AJIO ',
      description: 'Shopping app by reliance & Co.',
      releaseDate: new Date('2024-05-10'),
      version: 1,
      genre: 'Social',
      visibility: true,
      downloadCount: 50,
      imgpath:"https://logos-world.net/wp-content/uploads/2022/12/Ajio-Logo.jpg",
      comments: [
        {
          user_id: 'user1',
          app_id: 'app2',
          content: 'FashionFreak!',
          rating: 3,
        },
      ],
      averageRating:4,
    },
    
    ]
    return {AppData};
    }
    genId(AppData: AppData[]): number {
      return AppData.length > 0 ? Math.max(...AppData.map(appdata => appdata.id)) + 1 : 1;
    }
    
    
  }

 
  