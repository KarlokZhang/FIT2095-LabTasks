import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: Date | null = null;
  suburb: string = '';
  state: string = '';
  postCode: number | null = null;
  numOfPatients: number = 0;
  numOfDoctorsWithZeroPatient: number = 0;
  doctorsDb: any[] = [];
  totalPatients: number = 0;

  saveDoctor(): void {
    this.doctorsDb.push({
      id: uuidv4(),
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      suburb: this.suburb,
      state: this.state,
      postCode: this.postCode,
      numOfPatients: this.numOfPatients,
      address: this.formattedAddress(this.suburb, this.state, this.postCode),
    });

    if (this.numOfPatients === 0) {
      this.numOfDoctorsWithZeroPatient += 1;
    }

    this.totalPatients += this.numOfPatients;

    this.firstName = '';
    this.lastName = '';
    this.dateOfBirth = null;
    this.suburb = '';
    this.state = '';
    this.postCode = null;
    this.numOfPatients = 0;
  }

  formattedAddress(
    suburb: string,
    state: string,
    postCode: number | null
  ): string {
    return `${this.capitalizeString(suburb)}, ${state}, ${postCode}`;
  }

  deleteDoctorById(id: string): void {
    // this.doctorsDb = this.doctorsDb.filter((doctor) => doctor.id !== id);

    for (let i = 0; i < this.doctorsDb.length; i++) {
      const doctor = this.doctorsDb[i];
      if (doctor.id === id) {
        this.doctorsDb.splice(i, 1);
        this.totalPatients -= doctor.numOfPatients;
      }
    }
  }

  deleteDoctorsWithZeroPatient(): void {
    this.doctorsDb = this.doctorsDb.filter(
      (doctor) => doctor.numOfPatients !== 0
    );

    this.numOfDoctorsWithZeroPatient = 0;
  }

  capitalizeString(str: string): string {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }
}
