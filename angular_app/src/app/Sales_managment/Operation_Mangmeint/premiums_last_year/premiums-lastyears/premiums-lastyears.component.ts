import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
    aa: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', aa: 1 },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', aa: 3 },
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', aa: 4 },
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', aa: 9 },
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', aa: 8 },
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', aa: 9 },
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', aa: 0 },
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', aa: 1 },
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', aa: 1 },
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', aa: 1 },
];
@Component({
  selector: 'app-premiums-lastyears',
  templateUrl: './premiums-lastyears.component.html',
  styleUrls: ['./premiums-lastyears.component.css']
})
export class PremiumsLastyearsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'aa' ];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
