/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE doctorBaseService PLEASE EDIT ../doctor.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Doctor } from '../../domain/factomskaffolder_db/doctor';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Doctor.service.ts
 */

/*
 * SCHEMA DB Doctor
 *
	{
		first_name: {
			type: 'String',
			required : true
		},
		last_name: {
			type: 'String'
		},
		speciality: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		identity: {
			type: Schema.ObjectId,
			ref : "Doctor"
		},
		patient: {
			type: Schema.ObjectId,
			ref : "Doctor"
		},
	}
 *
 */
@Injectable()
export class DoctorBaseService {

    contextUrl: string = environment.endpoint + '/doctor';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS


    // Custom APIs

}