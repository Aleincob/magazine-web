import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-issue6',
  templateUrl: './issue6.component.html',
  styleUrls: ['./issue6.component.scss'],
})
export class IssueComponent {
  
  public imageUrl: string = this.route.activatedRouteData['imageUrl'];
  public footerText: string = this.route.activatedRouteData['footerText'];
  public backgroundColor: string = this.route.activatedRouteData['mainColor'];
  public color: string = this.route.activatedRouteData['color'];
  constructor(private route: RouterOutlet) {}
}
