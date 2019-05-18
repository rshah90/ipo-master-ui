import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { Router } from "@angular/router";
import { DatePipe } from '@angular/common';

export class ipoOrder{
  userId : Number;
  ipoId : Number;
  quantiy : Number;
  rate : Number;
  mode :String;
  creationDate : String;

  constructor(userId : Number,ipoId : Number,quantiy : Number,rate : Number,mode :String,creationDate : String){

    this.userId =userId;
    this.ipoId =ipoId;
  this.quantiy = quantiy;
  this.rate = rate;
  this.mode =mode;
  this.creationDate =creationDate;
  }
  
}

export class user{

  id : number;
  username : String;
  email : String ;
phonenumber : String;
}

@Component({
  selector: 'ngx-order-activity',
  templateUrl: './order-activity.component.html',
  styleUrls: ['./order-activity.component.scss']
})


export class OrderActivityComponent{

  registerForm: FormGroup;
  submitted = false;
  radioGroupValue = 'Buy';
  IPOId : string ;
  source: LocalDataSource = new LocalDataSource();
  userData : user[];
  dialogRef: any;
  router: any;
  
  constructor(private formBuilder: FormBuilder , private http: HttpClient,private activatedRoute: ActivatedRoute,protected ref: NbDialogRef<OrderActivityComponent>
    ,private datepipe: DatePipe) { 
  
  }

  ngOnInit() {
        this.registerForm = this.formBuilder.group({
            clientName: ['', Validators.required],
            quantiy: ['', Validators.required],
            rate: ['', Validators.required],
            date: ['', Validators.required],
            mode: ['',Validators.required],
        });

        this.activatedRoute.queryParamMap.subscribe(params => {
          console.log(params);
          this.IPOId = params.get("id");
          console.log(this.IPOId);
        });

        
    this.http.get("http://localhost:8080/get-user").subscribe((data  : user[]) =>{ 
   
     this.userData = data;
    });
       
    }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit() : void {

    this.submitted = true;
    //stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    if (window.confirm('Are you sure you want to create Order Entry?')) {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      let newDate  =this.datepipe.transform(this.registerForm.controls['date'].value,"yyyy-MM-dd");
     
       let order  = new ipoOrder(this.registerForm.controls['clientName'].value,Number(this.IPOId),
        this.registerForm.controls['quantiy'].value, this.registerForm.controls['rate'].value,
        this.registerForm.controls['mode'].value,newDate);
        console.log("hi"+JSON.stringify(order));
      this.http.post("http://localhost:8080/create-order",JSON.stringify(order),{headers : headers}).subscribe((data  : any) =>{
        this.registerForm.value.id = data.id;

      console.log(this.registerForm.value);
      this.ref.close();
      window.location.reload();
      
    });
    } else {
      //event.confirm.reject();
    }
  }

}


