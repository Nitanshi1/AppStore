import { Component } from '@angular/core';
import { CreateformComponent } from '../createform/createform.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NgbNavModule,CreateformComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  active = 'top'
  constructor(private router:Router){}
  logout(){
    localStorage.removeItem('authorization');
    this.router.navigate(['/login']);
  }

}
