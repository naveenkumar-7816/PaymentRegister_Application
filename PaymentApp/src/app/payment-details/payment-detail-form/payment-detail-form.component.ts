import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {
  constructor(public service:PaymentDetailService, private tost:ToastrService){}
  onSubmit(form:NgForm){
    if(form.valid){
      if(this.service.formData.paymentDetailId==0)
      this.insertedRecord(form);
    else
    this.updateRecord(form);
   
  }
  }
  insertedRecord(form:NgForm){
     this.service.postPaymentDetail().subscribe({
      next:res=>{
    this.service.list= res as PaymentDetail[];
    this.service.resetForm(form);
    this.tost.success("Inserted successfully", "Payment Details Register");
    this.service.formSubmitted=true;
      },
      error:err=>{console.log(err);}
    })

  }
  updateRecord(form:NgForm){
    this.service.putPaymentDetail().subscribe({
      next:res=>{
    this.service.list= res as PaymentDetail[];
    this.service.resetForm(form);
    this.tost.info("updated successfully", "Payment Details Register");
    this.service.formSubmitted=true;
      },
      error:err=>{console.log(err);}
    })

  }

}
