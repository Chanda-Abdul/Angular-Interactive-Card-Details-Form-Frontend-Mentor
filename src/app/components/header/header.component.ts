import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
