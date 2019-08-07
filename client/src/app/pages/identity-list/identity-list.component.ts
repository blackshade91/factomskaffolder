import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { IdentityService } from '../../services/identity.service';
// Import Models
import { Identity } from '../../domain/factomskaffolder_db/identity';

// START - USED SERVICES
/**
* IdentityService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* IdentityService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Identity
 * @class IdentityListComponent
 */
@Component({
    selector: 'app-identity-list',
    templateUrl: './identity-list.component.html',
    styleUrls: ['./identity-list.component.css']
})
export class IdentityListComponent implements OnInit {
    list: Identity[];
    search: any = {};
    idSelected: string;
    constructor(
        private identityService: IdentityService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.identityService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Identity to remove
     *
     * @param {string} id Id of the Identity to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Identity
     */
    deleteItem() {
        this.identityService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
