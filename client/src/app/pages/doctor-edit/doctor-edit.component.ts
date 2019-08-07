// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { DoctorService } from '../../services/doctor.service';
import { PatientService } from '../../services/patient.service';
import { IdentityService } from '../../services/identity.service';
// Import Models
import { Doctor } from '../../domain/factomskaffolder_db/doctor';
import { Identity } from '../../domain/factomskaffolder_db/identity';
import { Patient } from '../../domain/factomskaffolder_db/patient';

// START - USED SERVICES
/**
* DoctorService.create
*	@description CRUD ACTION create
*
* DoctorService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* PatientService.list
*	@description CRUD ACTION list
*
* IdentityService.list
*	@description CRUD ACTION list
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
    listIdentity: Identity[];
    listPatient: Patient[];
    model: Doctor;
    formValid: Boolean;

    constructor(
    private doctorService: DoctorService,
    private patientService: PatientService,
    private identityService: IdentityService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Doctor();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.doctorService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.identityService.list().subscribe(list => this.listIdentity = list);
            this.patientService.list().subscribe(list => this.listPatient = list);
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



