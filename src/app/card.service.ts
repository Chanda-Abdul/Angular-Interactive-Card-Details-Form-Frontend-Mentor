import { EventEmitter } from "@angular/core";

export class CardService {
  name = ''
  displayCurrentCardName(cardholdername: string) {
    console.log('current card holder is' + cardholdername);
  }

  //add card

  updateStatus(name: string) {
    this.name = name;
  }
  statusUpdated = new EventEmitter;
}
