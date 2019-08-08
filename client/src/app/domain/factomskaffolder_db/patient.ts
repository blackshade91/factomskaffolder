import { PatientBase } from './base/patient.base';
import { Doctor } from './doctor';

/**
 * YOU CAN OVERRIDE HERE PatientBase.ts
 */
export class Patient extends PatientBase {
  // Insert here your custom attributes and function
  public doctor: Doctor | string;
}
