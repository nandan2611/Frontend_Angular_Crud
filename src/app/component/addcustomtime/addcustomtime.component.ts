import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomtimeserviceService } from 'src/app/service/customtimeservice.service';

@Component({
  selector: 'app-addcustomtime',
  templateUrl: './addcustomtime.component.html',
  styleUrls: ['./addcustomtime.component.css']
})
export class AddcustomtimeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: CustomtimeserviceService) { }
 
  addForm: FormGroup;
 
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      customTimePeriodId: [],
      periodName: ['', Validators.required],
      parentPeriodId : ['', Validators.required],
      periodNum: ['', Validators.required],
     
    })
  
  }
  onSubmit() {
    this.apiService.createCustomtime(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-customtime']);
      });
    
  }
}