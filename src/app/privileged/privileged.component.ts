import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrevilegedService } from '../previleged.service';

@Component({
  selector: 'app-privileged',
  templateUrl: './privileged.component.html',
  styleUrls: ['./privileged.component.css']
})
export class PrivilegedComponent implements OnInit {
  public showPrivilegedForm:boolean = true;

 
  customerForm: FormGroup;
 
  coupons: any[] = [];

  constructor(private formBuilder: FormBuilder,public servises:PrevilegedService) {
    this.customerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      age: ['', [Validators.required, Validators.min(20), Validators.max(60)]],
      gender: ['Male', Validators.required],
      profession: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      phone: [
        '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      ],
      amount: ['', [Validators.required, Validators.max(99999)]],
      year: ['', Validators.required],
      eligibility: [''],
      couponCode: ['']
    });
    this.servises.Coupongetmethod().subscribe((data:any)=>{
      console.log(data,"Coupon")
      this.coupons = data;
      console.log(this.coupons)
    
    
    })

  }
  ngOnInit(): void {
 
  }
  get phone() {
    return this.customerForm.get('phone');
  }




  onSubmit() {
  
    if (this.customerForm.invalid) {
      // Mark the phone control as touched to display error
      this.phone?.markAsTouched();
      return;
    }
    if (this.showPrivilegedForm) {
   
      const privilegedCustomer = this.customerForm.value;
      this.servises.submitPrivileged(privilegedCustomer).subscribe((res:any)=>{
        console.log(res)

      })

      console.log('Privileged Customer:', privilegedCustomer);
    } else {
      
      const unprivilegedCustomer = this.customerForm.value;
      this.servises. submitUnprivileged(unprivilegedCustomer).subscribe((res:any)=>{
        console.log(res)

      })
      console.log('Unprivileged Customer:', unprivilegedCustomer);
    }

    // Reset the form
    this.customerForm.reset();
   
  }

   
  }



