// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { IdentityService } from '../../services/identity.service';
import { DoctorService } from '../../services/doctor.service';
// Import Models
import { Identity } from '../../domain/factomskaffolder_db/identity';
import { Doctor } from '../../domain/factomskaffolder_db/doctor';

// START - USED SERVICES
/**
* IdentityService.create
*	@description CRUD ACTION create
*
* DoctorService.findByidentity
*	@description CRUD ACTION findByidentity
*	@param Objectid key Id della risorsa identity da cercare
*
* IdentityService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* IdentityService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Identity
 */
@Component({
    selector: 'app-identity-edit',
    templateUrl: 'identity-edit.component.html',
    styleUrls: ['identity-edit.component.css']
})
export class IdentityEditComponent implements OnInit {
    item: Identity;
    listIdentity: Identity[];
    externalDoctor: Doctor[];
    model: Identity;
    formValid: Boolean;

    constructor(
    private identityService: IdentityService,
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Identity();
        this.externalDoctor = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.identityService.get(id).subscribe(item => this.item = item);
                this.doctorService.findByIdentity(id).subscribe(list => this.externalDoctor = list);
            }
            // Get relations
        });
    }


    /**
     * Save Identity
     *
     * @param {boolean} formValid Form validity check
     * @param Identity item Identity to save
     */
    save(formValid: boolean, item: Identity): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.identityService.update(item).subscribe(data => this.goBack());
            } else {
                this.identityService.create(item).subscribe(data => this.goBack());
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



