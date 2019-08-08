// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { DoctorService } from '../../services/doctor.service';
import { PatientService } from '../../services/patient.service';
import { ReportService } from '../../services/report.service';
// Import Models
import { Doctor } from '../../domain/factomskaffolder_db/doctor';
import { Report } from '../../domain/factomskaffolder_db/report';
import { Patient } from '../../domain/factomskaffolder_db/patient';

// START - USED SERVICES
/**
* DoctorService.create
*	@description CRUD ACTION create
*
* PatientService.findBydoctor
*	@description CRUD ACTION findBydoctor
*	@param Objectid key Id della risorsa doctor da cercare
*
* ReportService.findBydoctor
*	@description CRUD ACTION findBydoctor
*	@param Objectid key Id della risorsa doctor da cercare
*
* DoctorService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* DoctorService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Doctor
 */
@Component({
  selector: 'app-doctor-edit',
  templateUrl: 'doctor-edit.component.html',
  styleUrls: ['doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {
  item: Doctor;
  listDoctor: Doctor[];
  externalReport: Report[];
  externalPatient: Patient[];
  model: Doctor;
  formValid: Boolean;

  constructor(
    private doctorService: DoctorService,
    private patientService: PatientService,
    private reportService: ReportService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    // Init item
    this.item = new Doctor();
    this.externalReport = [];
    this.externalPatient = [];
  }

  /**
   * Init
   */
  ngOnInit() {
    this.route.params.subscribe(param => {
      const id: string = param['id'];
      if (id !== 'new') {
        this.doctorService.get(id).subscribe(item => (this.item = item));
        this.reportService
          .findByDoctor(id)
          .subscribe(list => (this.externalReport = list));
        this.patientService
          .findByDoctor(id)
          .subscribe(list => (this.externalPatient = list));
      }
      // Get relations
    });
  }

  /**
   * Save Doctor
   *
   * @param {boolean} formValid Form validity check
   * @param Doctor item Doctor to save
   */
  save(formValid: boolean, item: Doctor): void {
    this.formValid = formValid;
    if (formValid) {
      if (item._id) {
        this.doctorService.update(item).subscribe(data => this.goBack());
      } else {
        this.doctorService.create(item).subscribe(data => this.goBack());
      }
    }
  }

  /**
   * Go Back
   */
  goBack(): void {
    this.location.back();
  }
}
