import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: number;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name:12, weight: 1.0079 },
  {position: 2, name: 23, weight: 4.0026},
  {position: 3, name: 34, weight: 6.941},
  {position: 4, name: 54, weight: 9.0122},
  {position: 5, name: 4, weight: 10.811},
  {position: 6, name: 54, weight: 12.0107},
  {position: 7, name: 45, weight: 14.0067},
  {position: 8, name: 45, weight: 15.9994},
  {position: 9, name: 43, weight: 18.9984},
  {position: 10, name: 432, weight: 20.1797},
];


@Component({
  selector: 'app-elevated-balance',
  templateUrl: './elevated-balance.component.html',
  styleUrls: ['./elevated-balance.component.css']
})
export class ElevatedBalanceComponent implements OnInit {




  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
