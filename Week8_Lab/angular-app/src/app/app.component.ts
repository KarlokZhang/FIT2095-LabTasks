import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: Date = new Date();
  suburb: string = '';
  state: string = '';
  postCode: number = 0;
  numOfPatients: number = 0;
  doctorsDb: any[] = [];
}
