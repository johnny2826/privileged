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
 
  coupons: string[] = [];

  constructor(private formBuilder: FormBuilder,public servises:PrevilegedService) {
    this.customerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      age: ['', [Validators.required, Validators.min(20), Validators.max(60)]],
      gender: ['', Validators.required],
      profession: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      amount: ['', [Validators.required, Validators.max(99999)]],
      year: ['', Validators.required],
      eligibility: [false],
      couponCode: ['']
    });
   this.coupons = [];

    // Populate coupons from the JSON
    this.coupons = [];
    // Assuming you have the JSON data available
    // You can fetch it from an API or define it in a separate file
    // and import it here
    // Example: this.coupons = jsonData.Coupons;
  }
  ngOnInit(): void {
 
  }




  onSubmit() {
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



