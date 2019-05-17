import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-client-report',
  templateUrl: './client-report.component.html',
  styleUrls: ['./client-report.component.scss']
})
export class ClientReportComponent implements OnInit {
  
  IPOId : string ;
  source: LocalDataSource = new LocalDataSource();
  
  settings = {
    actions: false,
    columns: {
      clientName: {
        title: 'clientName',
        type: 'string',
        },
      mode: {
        title: 'mode',
        type: 'string',
        },
      rate: {
        title: 'rate',
        type: 'string',
      },
      quantiy: {
        title: 'quantiy',
        type: 'string',
        
      },
      total: {
        title: 'total',
        type: 'string',
        
      },
      creationDate: {
        title: 'creationDate',
        type: 'string',
        
      },
    },
  };

  constructor(private activatedRoute: ActivatedRoute , private http : HttpClient ) {
 
    
    
   }

  ngOnInit() {

    
    this.activatedRoute.queryParamMap.subscribe(params => {
      console.log(params);
      this.IPOId = params.get("id");
      console.log(this.IPOId);
      this.http.get("http://localhost:8080/get-orderInventory-byIPO?ipoId="+ this.IPOId).subscribe((data  : any) =>{
      this.source.load(data);
});
    });
  }

}
