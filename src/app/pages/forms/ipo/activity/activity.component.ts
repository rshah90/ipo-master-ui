import { Component, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { OrderActivityComponent } from './order-activity/order-activity.component';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent {

  names: string[] = [];
  ipoNames: string[] = [];
  ipoQuantites: string[] = [];
  IPOId :  String;

  

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

      clientName: {
        title: 'Client Name',
        type: 'string',
      },
      
      rate: {
        title: 'IPO Rate',
        type: 'string',
      },
      quantiy: {
        title: 'IPO Quantity',
        type: 'string',
      },
      mode: {
        title: 'Order Mode',
        type: 'string',
      },
      creationDate:{
        title: 'Creation Date',
        type: 'date',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private dialogService: NbDialogService , private service: SmartTableData , private http:HttpClient
    ,private activatedRoute: ActivatedRoute) {


  }


  ngOnInit() {
    

    this.activatedRoute.queryParamMap.subscribe(params => {
      console.log(params);
      this.IPOId = params.get("id");
      console.log(this.IPOId);

      this.http.get("http://localhost:8080/get-orderInventory-byIPO?ipoId=" + this.IPOId).subscribe((data  : any) =>{
        console.log("date"+data)  ;
        this.source.load(data);
    });
   
});
  }

  open2(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      { context: 'this is some additional data passed to dialog' });
  }

  open3() {
    this.dialogService.open(OrderActivityComponent)
      .onClose.subscribe(name => name && this.names.push(name));

  }

  openWithoutBackdrop(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        hasBackdrop: false,
      });
  }

  openWithoutBackdropClick(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        closeOnBackdropClick: false,
      });
  }

  openWithoutEscClose(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        closeOnEsc: false,
      });
  }

  
}
