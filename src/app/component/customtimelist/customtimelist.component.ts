import { Component, OnInit } from '@angular/core';
import { customtime } from 'src/app/model/customtime';
import { Router } from '@angular/router';
import { CustomtimeserviceService } from 'src/app/service/customtimeservice.service';

@Component({
  selector: 'app-customtimelist',
  templateUrl: './customtimelist.component.html',
  styleUrls: ['./customtimelist.component.css']
})
export class CustomtimelistComponent implements OnInit {

  public users: customtime[];
 con: customtime[];
 content: customtime;
 
  constructor(private router: Router, private apiService: CustomtimeserviceService) { }
 
ngOnInit() {
    
  this.getContent();
}
 
getContent() : void{
  this.apiService.getCustomtime().subscribe({
      next: res => {
          this.users = res;
  }
      
    });
}
 
goTo(): void {
    this.router.navigate(['home']);
  };
  deleteContent(cont: customtime ): void {
    this.apiService.deleteCustomtime(cont.customTimePeriodId)
      .subscribe( data => {  
        console.log(data);  
        this.apiService.getCustomtime().subscribe({
          next: res => {
              this.users = res;
      }
          
        });
      });
     
    }
 
    editContent(cont : customtime): void {
      window.localStorage.removeItem("editUserId");
     // window.localStorage.setItem("editUserId",cont.contentId);
    // this.router.navigate(['add-content']);
 
    //  this.router.navigate(['app-edit-component']);
    };

}
