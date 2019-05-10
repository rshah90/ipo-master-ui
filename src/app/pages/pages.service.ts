import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NbMenuItem } from '@nebular/theme';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import "rxjs/Rx";
import {Http, Response} from "@angular/http";
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(private http : HttpClient) { }

  

  getMenu(): Observable<any> {
    return this.http.get("http://localhost:8080/get-menu") ;
}
}
