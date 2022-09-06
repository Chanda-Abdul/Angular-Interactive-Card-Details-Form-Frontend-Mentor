import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardService } from './card.service';
import { Card } from './components/form/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

  constructor(private cardservice: CardService) { }
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
