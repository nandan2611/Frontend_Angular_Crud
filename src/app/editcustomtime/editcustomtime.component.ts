import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { customtime } from '../model/customtime';
import { Router } from '@angular/router';
import { CustomtimeserviceService } from '../service/customtimeservice.service';

@Component({
  selector: 'app-editcustomtime',
  templateUrl: './editcustomtime.component.html',
  styleUrls: ['./editcustomtime.component.css']
})
export class EditcustomtimeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

 /* content: customtime;
  editForm: FormGroup;
  public users: customtime[];
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: CustomtimeserviceService) { }
 
  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      customTimePeriodId: [],
      periodName: ['', Validators.required],
      parentPeriodId : ['', Validators.required],
      periodNum: ['', Validators.required],
    })
  
    this.apiService.GetContentById(+userId)
      .subscribe();
      
     
  }
 
  onSubmit() {
    this.apiService.updateCustomtime(this.editForm.value)
    .subscribe( data => {  
      console.log(data);  
      this.apiService.getCustomtime().subscribe({
        next: res => {
            this.users = res;
    }
        
      });
    }); */
  }

