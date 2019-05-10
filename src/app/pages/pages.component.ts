import { Component } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { MENU_ITEMS } from './pages-menu';
import {PagesService} from './pages.service';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu : NbMenuItem[] ;
 
 constructor(private http : HttpClient , private pagesService:PagesService) {
  console.log("data:")
 this.pagesService.getMenu().subscribe((data  : any) =>{

 //console.log("data:"+data[1].link)
     this.menu = data;
});

 }
}
