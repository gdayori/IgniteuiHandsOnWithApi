import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';

@Component({
  selector: 'app-mygrid',
  templateUrl: './mygrid.component.html',
  styleUrls: ['./mygrid.component.css']
})
export class MyGridComponent implements OnInit {
  public localData: any[];
  title = 'myGrid';
  constructor() { }

  ngOnInit() {
    this.localData = employeesData;
  }
}
