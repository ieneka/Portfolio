import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(700, style({
          transform: 'translateX(0)',
          opacity: 1
        })),
      ])
    ]),
    trigger('enterIcon', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate(900, style({
          height: 1,
          opacity: 1
        })),
      ])
    ])
  ]
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
