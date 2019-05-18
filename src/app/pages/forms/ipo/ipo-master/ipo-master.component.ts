import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { Router } from '@angular/router';
import { PagesService } from '../../../pages.service';
import {SmartTableDatePickerComponent } from '../../smart-table-date-picker/smart-table-date-picker.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'ngx-ipo-master',
  templateUrl: './ipo-master.component.html',
  styleUrls: ['./ipo-master.component.scss']
})
export class IpoMasterComponent implements OnInit {

  

  ngOnInit() {
  }


  
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      confirmCreate: true,
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      confirmSave: true,
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
  
    columns: {
      
      status: {
        title: 'Status',
        type: 'string',
        defaultValue: 'Active'
      },
      issuerCompany: {
        title: 'Issuer Company',
        type: 'string',
      },
      openDate: {
        title: 'Open Date',
        type: 'html',
        editor: {type: 'custom', component: SmartTableDatePickerComponent,}
      
      },
      closeDate: {
        title: 'Close Date',
        type: 'html',
        editor: {type: 'custom', component: SmartTableDatePickerComponent,}
      },
      lotSize: {
        title: 'Lot Size',
        type: 'number',
      },
      issueLowerPrice: {
        title: 'Issue Lower Price(rs)',
        type: 'number',
      },
      issueHigherPrice: {
        title: 'Issue Higher Price(rs)',
        type: 'number',
      },
      issueSize: {
        title: 'Issue Size(cr)',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData , private http : HttpClient , private router : Router
    , private pagesService : PagesService, private datepipe: DatePipe) {
    //const data = this.service.getData();
   
    this.http.get("http://localhost:8080/get-ipo").subscribe((data  : any) =>{
      this.source.load(data);
});
    
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log("event.newData.id"+event.data)
      this.http.get("http://localhost:8080/delete-ipo?id=" +event.data.id).subscribe((data  : any) =>{
        window.location.reload();
        event.confirm.resolve(event.newData);
      });
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) : void {
    console.log("hi"+event.newData.closeDate);
    let openDate  =this.datepipe.transform(event.newData.openDate,"yyyy-MM-dd");
    let closeDate  =this.datepipe.transform(event.newData.closeDate,"yyyy-MM-dd");
    event.newData.openDate = openDate;
    event.newData.closeDate = closeDate;
    if (window.confirm('Are you sure you want to create?')) {
      console.log("hi"+event.newData.closeDate);
      this.http.post("http://localhost:8080/create-ipo",event.newData).subscribe((data  : any) =>{
      event.newData.id = data.id;
     // window.location.reload();
      event.confirm.resolve(event.newData);
    });


    } else {
      event.confirm.reject();
    }
  }


  onSaveConfirm(event) : void {
    console.log("hi");
    if (window.confirm('Are you sure you want to update?')) {
      this.http.post("http://localhost:8080/update-ipo",event.newData).subscribe((data  : any) =>{
        window.location.reload();
      event.confirm.resolve(event.newData);
    });
    } else {
      event.confirm.reject();
    }
  }

  
}
