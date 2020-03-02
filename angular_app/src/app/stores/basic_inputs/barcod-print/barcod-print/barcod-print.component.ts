import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-barcod-print',
  templateUrl: './barcod-print.component.html',
  styleUrls: ['./barcod-print.component.css']
})
export class BarcodPrintComponent implements OnInit {


  constructor() { }

  /** Whether the number of selected elements matches the total number of rows. */

  ngOnInit() {
  }

}
