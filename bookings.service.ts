import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataserviceService } from './dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  
  constructor(private dataserviceservice :DataserviceService ) { }

  public bookings:BehaviorSubject<any>=new BehaviorSubject<any>([]);
  // public patientname:any;
  // public date:any;

  // book(sdoctor:any){
  //   var booking={
  //     doctor:sdoctor
  //   }
  //   var bookingsTemp=this.bookings.getValue();
  //   bookingsTemp.push(booking);
  //   this.bookings.next(bookingsTemp);
  //   console.log(this.bookings.getValue());
  // }
  getAppointment() {
    return this.dataserviceservice.getData('Appointment');
  }
  
}
