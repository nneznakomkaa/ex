import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableRows;

  constructor() { }

  ngOnInit() {
    this.tableRows = datas;
  }

  randomData() {
    this.tableRows.map(item => item.randomNumber = Math.floor(Math.random() * 100));
  }

}
