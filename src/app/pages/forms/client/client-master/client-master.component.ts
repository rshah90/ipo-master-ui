import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { SmartTableData } from '../../../../@core/data/smart-table';

@Component({
  selector: 'ngx-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.scss']
})
export class ClientMasterComponent implements OnInit {

  

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
      id:{
         id:'id',
         type:'number',
         editable:false,
         addable: false, 
//         show : false, 
      },
      username: {
        title: 'Client Name',
        type: 'string',
      },
      email: {
        title: 'E-mail ID',
        type: 'string',
      },
      phonenumber: {
        title: 'Phone Number',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData , private http : HttpClient) {
    //const data = this.service.getData();

    this.http.get("http://localhost:8080/get-user").subscribe((data  : any) =>{
      this.source.load(data);
});
    
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log("event.newData.id"+event.data)
      this.http.get("http://localhost:8080/delete-user?id=" +event.data.id).subscribe((data  : any) =>{
      
        event.confirm.resolve(event.newData);
      });
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) : void {
    console.log("hi");
    if (window.confirm('Are you sure you want to create?')) {
      this.http.post("http://localhost:8080/create-user",event.newData).subscribe((data  : any) =>{
        event.newData.id = data.id;
      event.confirm.resolve(event.newData);
    });
    } else {
      event.confirm.reject();
    }
  }


  onSaveConfirm(event) : void {
    console.log("hi");
    if (window.confirm('Are you sure you want to update?')) {
      this.http.post("http://localhost:8080/update-user",event.newData).subscribe((data  : any) =>{
      
      event.confirm.resolve(event.newData);
    });
    } else {
      event.confirm.reject();
    }
  }

  
} 
