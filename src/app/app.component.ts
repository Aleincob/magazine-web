import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({
            position: 'absolute',
            transform: 'translateY(-100%)',
          }),
          animate(
            '1000ms ease',
            style({
              transform: 'translateY(0%)',
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'magazine-web';
  public getRouteAnimation(outlet: RouterOutlet) {
    const res =
      outlet.activatedRouteData['num'] === undefined
        ? -1
        : outlet.activatedRouteData['num'];

    return res;
  }
}
