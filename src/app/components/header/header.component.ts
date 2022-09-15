import { Component, Input, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('onInit', [
      state('in',
        style({
          opacity: 1,
          transform: 'translateY(0)'
        })),
        transition('void => *', [
          animate(1000, keyframes([
            style({
              transform: 'translateY(-100px)',
              opacity: 0,
              offset: 0
            }),
            style({
              transform: 'translateY(-50px)',
              opacity: 0.5,
              offset: 0.3
            }),
            style({
              transform: 'translateY(-20px)',
              opacity: 1,
              offset: 0.8
            }),
            style({
              transform: 'translateY(0px)',
              opacity: 1,
              offset: 1
            })
          ])
          )
        ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  @Input() currentCard;

  name: string = 'Jane Appleseed';
  cid: string = '123';
  number: any = ['9876', '1234', '5544', '6543'];
  month: string = '09';
  year: string = '22';

  logo = '';

  constructor() { }

  ngOnInit(): void {

  }

}
