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
            transform: 'translateX(-100px)'
          }),
          animate(300),
        ]),
        transition('* => void', [
          animate(300, style({
            opacity: 0,
            transform: 'translateX(100px)'
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
