import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.scss']
})
export class AdminReportComponent implements OnInit {

  IPOId : string ;
  source: LocalDataSource = new LocalDataSource();
  
  settings = {
    actions: false,
    columns: {
      clientName: {
        title: 'clientName',
        type: 'string',
        },
      buyerAmount: {
        title: 'buyerAmount',
        type: 'string',
        },
      sellerAmount: {
        title: 'sellerAmount',
        type: 'string',
      },
      total: {
        title: 'balance',
        type: 'string',
        
      },
      pendingQuantity: {
        title: 'pendingQuantity',
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
      this.http.get("http://localhost:8080/get-balanceReport?ipoId="+ this.IPOId).subscribe((data  : any) =>{
        console.log(data);
      this.source.load(data);
});
    });
  }

}
