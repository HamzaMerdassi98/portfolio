import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.9)'
      })),
      transition('void <=> *', animate(1000))
    ])
  ]
})
export class HomeComponent {
  background: string = "assets/back.jpg"
}
