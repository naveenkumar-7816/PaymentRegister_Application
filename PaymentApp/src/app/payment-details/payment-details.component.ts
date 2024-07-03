import { Component, OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { NgFor } from '@angular/common';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentDetailFormComponent, NgFor],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit{
  constructor(public service:PaymentDetailService, private tost:ToastrService) {

  }
  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectRecord:PaymentDetail){
    this.service.formData=Object.assign({},selectRecord);
  }
  onDelete(id:number){
    if(confirm('Are you sure to delete record'))
    this.service.deletePaymentDetail(id).subscribe({
      next:res=>{
    this.service.list= res as PaymentDetail[];
    this.tost.error("Deleted successfully", "Payment Details Register");
      },
      error:err=>{console.log(err);}
    })
  }
  

}
