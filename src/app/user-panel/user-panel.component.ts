import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [RouterOutlet,RouterModule,NgbNavModule],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.css'
})
export class UserPanelComponent {
  active = 'top'
  constructor(private router:Router){}
  logout(){
    localStorage.removeItem('authorization');
    this.router.navigate(['/login']);
  }
}
