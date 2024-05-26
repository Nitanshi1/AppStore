import { Routes } from '@angular/router';
import { CreateformComponent } from './createform/createform.component';
import { EditformComponent } from './editform/editform.component';
import { HomeComponent } from './home/home.component';
import { HomedetailComponent } from './homedetail/homedetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

import { MyProfileUserComponent } from './my-profile-user/my-profile-user.component';
import { InstalledAppsComponent } from './installed-apps/installed-apps.component';
import { UserHomeComponent } from './user-home/user-home.component';

export const routes: Routes = [

    { path: 'create', component: CreateformComponent },
    { path:'update/:id', component: EditformComponent},
    { path:'home', component: HomeComponent},
    { path:'home/:id', component:HomedetailComponent},
    { path:'dashboard', component: DashboardComponent},
    { path:'myprofile',component:MyprofileComponent},
    { path:'my-profile-user',component:MyProfileUserComponent},
    { path:'installed-apps',component:InstalledAppsComponent},
   
    { path:'user-home',component:UserHomeComponent},


];
