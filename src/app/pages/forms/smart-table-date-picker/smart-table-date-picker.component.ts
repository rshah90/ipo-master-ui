import { Component, OnInit } from '@angular/core';
import {  AfterViewInit } from '@angular/core';

import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

@Component({
  selector: 'ngx-smart-table-date-picker',
  templateUrl: './smart-table-date-picker.component.html',
  styleUrls: ['./smart-table-date-picker.component.scss']
})
export class SmartTableDatePickerComponent extends DefaultEditor implements OnInit {

  constructor() {
    super();
}

  ngOnInit() {
  }

}
