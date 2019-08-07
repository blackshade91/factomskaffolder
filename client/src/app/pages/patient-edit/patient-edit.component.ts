// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { PatientService } from '../../services/patient.service';
import { DoctorService } from '../../services/doctor.service';
import { ReportService } from '../../services/report.service';
// Import Models
import { Patient } from '../../domain/factomskaffolder_db/patient';
import { Doctor } from '../../domain/factomskaffolder_db/doctor';
import { Report } from '../../domain/factomskaffolder_db/report';

// START - USED SERVICES
/**
 * PatientService.create
 *	@description CRUD ACTION create
 *
 * DoctorService.findBypatient
 *	@description CRUD ACTION findBypatient
 *	@param Objectid key Id della risorsa patient da cercare
 *
 * ReportService.findBypatient
 *	@description CRUD ACTION findBypatient
 *	@param Objectid key Id della risorsa patient da cercare
 *
 * PatientService.get
 *	@description CRUD ACTION get
 *	@param ObjectId id Id
 *
 * PatientService.update
 *	@description CRUD ACTION update
 *	@param ObjectId id Id
 *
 */
// END - USED SERVICES

/**
 * This component allows to edit a Patient
 */
@Component({
  selector: 'app-patient-edit',
  templateUrl: 'patient-edit.component.html',
  styleUrls: ['patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {
  item: Patient;
  listPatient: Patient[];
  externalDoctor: Doctor[];
  externalReport: Report[];
  model: Patient;
  formValid: Boolean;

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService,
    private reportService: ReportService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    // Init item
    this.item = new Patient();
    this.externalDoctor = [];
    this.externalReport = [];
  }

  /**
   * Init
   */
  ngOnInit() {
    this.route.params.subscribe(param => {
      const id: string = param['id'];
      if (id !== 'new') {
        this.patientService.get(id).subscribe(item => (this.item = item));
        this.doctorService
          .findByPatient(id)
          .subscribe(list => (this.externalDoctor = list));
        // this.reportService.findByPatient(id).subscribe(list => this.externalReport = list);
      }
      // Get relations
    });
  }

  /**
   * Save Patient
   *
   * @param {boolean} formValid Form validity check
   * @param Patient item Patient to save
   */
  save(formValid: boolean, item: Patient): void {
    this.formValid = formValid;
    if (formValid) {
      if (item._id) {
        this.patientService.update(item).subscribe(data => this.goBack());
      } else {
        this.patientService.create(item).subscribe(data => this.goBack());
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
