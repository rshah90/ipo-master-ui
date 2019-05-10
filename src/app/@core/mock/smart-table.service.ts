import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    username: 'Rushabh Shah',
    email: 'rshah@gmail.com',
    phonenumber: '1234567890',
  }, {
    username: 'Kinjal Shah',
    email: 'kshah@gmail.com',
    phonenumber: '1234567890',
  }, {
    username: 'jainil Shah',
    email: 'jshah@gmail.com',
    phonenumber: '1234567890',
  }];

  getData() {
    return this.data;
  }
}
