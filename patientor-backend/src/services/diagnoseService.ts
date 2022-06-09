/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import diagnoseData from '../../data/diagnoses.json';
import patientEntries from '../../data/patients';
import {Patient,  PatientWithoutId, NonSensitivePatientEntry, DiagnoseEntry, EntryWithoutId} from '../types';
import { v1 as uuid } from 'uuid';


const diagnoses: Array<DiagnoseEntry> = diagnoseData;

const getEntries = (): Array<DiagnoseEntry> => {
  return diagnoses;
};

const addDiagnose = () => {
  return null;
};

const getNonSensitivePatientEntries = (): NonSensitivePatientEntry[] => {
    return patientEntries.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id, 
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const findById = (id: string): Patient | undefined => {
  console.log('before find');

  const entry = patientEntries.find(d => d.id === id);
  if (entry) {
    return entry;
  }
  else {
    return;
  }
  
};

const addPatient = (entry:  PatientWithoutId): Patient => {
    const ID = uuid();
    const newPatientEntry = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        id: ID,
        ...entry
    };
    patientEntries.push(newPatientEntry);
    console.log('newPatientEntry', newPatientEntry);
    
    return newPatientEntry;
};

const addEntry = (id: string, entry: EntryWithoutId): EntryWithoutId => {
  // no need {} to pass two props
  const ID = uuid();
  const singlePatient = patientEntries.find(patient => patient.id === id);
  if (singlePatient) {
    const newEntry = {
      id: ID,
      ...entry
    };
    console.log('newEntry', newEntry);
    
    singlePatient.entries.push(newEntry);
    return newEntry;
  } else {
    
    return entry;
  }
};

export default {
  getEntries,
  addPatient,
  addDiagnose,
  getNonSensitivePatientEntries,
  findById,
  addEntry
};