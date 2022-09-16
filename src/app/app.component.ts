import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('onInit', [
        state('in',
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(25vh)'
          }),
          animate('1s 200ms ease-in'),
        ]),
        transition('* => void', [
          animate('1s 200ms ease-out', style({
            opacity: 0,
            transform: 'translateX(25vh)'
          }),
          ),
        ])
      ])
  ]
})
export class AppComponent implements OnInit {
  title = 'angular interactive card details form';

  currentCard = {
    currentName: '',
    currentNumber: '',
    currentMonth: '',
    currentYear: '',
    currentCID: '',
  }

  constructor(

  ) { }
  ngOnInit() {

  }

  addNewInfo(info: any) {
    this.currentCard.currentName = info.name;
    this.currentCard.currentNumber = info.number;
    this.currentCard.currentMonth = info.month;
    this.currentCard.currentYear = info.year;
    this.currentCard.currentCID = info.cid;
  }

}
