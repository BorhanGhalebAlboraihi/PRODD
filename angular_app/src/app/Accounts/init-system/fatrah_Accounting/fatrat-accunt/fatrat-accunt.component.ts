import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  unit: string;
  sss: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', unit: 'cm', sss: 100025 },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', unit: 'cm', sss: 100025},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', unit: 'cm', sss: 100025},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', unit: 'cm', sss: 100025},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', unit: 'cm', sss: 100025},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', unit: 'cm', sss: 100025},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', unit: 'cm', sss: 100025},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', unit: 'cm', sss: 100025},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', unit: 'cm', sss: 100025},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', unit: 'cm', sss: 100025},
];


@Component({
  selector: 'app-fatrat-accunt',
  templateUrl: './fatrat-accunt.component.html',
  styleUrls: ['./fatrat-accunt.component.css']
})
export class FatratAccuntComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'unit', 'sss'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
