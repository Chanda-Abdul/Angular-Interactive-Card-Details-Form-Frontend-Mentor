import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cid = '123';
  number = ['0000', '1111', '0000', '2222'];
  month = '08';
  year = '22';
  name = 'Jane Appleseed'
  logo = '';


  constructor() { }

  ngOnInit(): void {
  }

}
