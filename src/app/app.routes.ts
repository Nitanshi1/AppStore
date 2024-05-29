import { Routes } from '@angular/router';
import { CreateformComponent } from './createform/createform.component';
import { EditformComponent } from './editform/editform.component';
import { HomeComponent } from './home/home.component';
import { HomedetailComponent } from './homedetail/homedetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { InstalledAppsComponent } from './installed-apps/installed-apps.component';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"",redirectTo:"/signin",pathMatch:'full'},
    { path: 'create', component: CreateformComponent },
    { path:'update/:id', component: EditformComponent},
    { path:'home', component: HomeComponent},
    { path:'home/:id', component:HomedetailComponent},
    { path:'dashboard', component: DashboardComponent},
   
    { path:'installed-apps',component:InstalledAppsComponent},
    { path:'admin-panel',component:AdminPanelComponent},
    { path:'admin-profile',component:AdminProfileComponent},
    { path:'user-panel',component:UserPanelComponent},
    { path:'user-profile',component:UserProfileComponent},
    { path:'signin',component:SignInComponent},
    { path:'login',component:LoginComponent}
    

    

    
    
    
    

   
    

];
