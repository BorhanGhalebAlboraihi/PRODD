import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  unit: string;
}


@Component({
  selector: 'app-screed-account',
  templateUrl: './screed-account.component.html',
  styleUrls: ['./screed-account.component.css']
})
export class ScreedAccountComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight',  'unit' , 'symbol'];

  constructor() { }

  ngOnInit() {
  }

}
