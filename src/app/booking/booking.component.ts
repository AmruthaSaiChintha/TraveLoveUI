import { Component } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {


  User:any;
 IsLoggedIn:boolean=false
 
  constructor(private regService: BookingService) { }

  ngOnInit() {

    this.regService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.User= data;
    }) 

}
Logout(){

  localStorage.removeItem("User");
  location.href = "/login";
  
}
}
