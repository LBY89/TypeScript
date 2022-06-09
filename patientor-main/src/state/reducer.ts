import { State } from "./state";
import { Patient, Diagnosis } from "../types";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }

  | {
      type: "UPDATE_PATIENT";
      payload: Patient;
    }
  
  | {
    type: "SET_DIAGNOSES";
    payload: Diagnosis[];
    }

  | {
    type: "ADD_ENTRY";
    payload: Patient;
  };
  
  

export const reducer = (state: State, action: Action): State => {
  console.log('state', state);
  
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };

    case "UPDATE_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload

        }
      };
    case "SET_DIAGNOSES":
      return {
        ...state,
        diagnoses: state.diagnoses.concat(action.payload),
        
      };
    case "ADD_ENTRY":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: {
            ...state.patients[action.payload.id],
            ...action.payload,
          },
        }
      };
    default:
      return state;
  }
};


export const setPatientList = (patients: Patient[]): Action => {
  return { type: "SET_PATIENT_LIST", payload: patients };
};

export const addPatient = (patient: Patient): Action => {
  return { type: "ADD_PATIENT", payload: patient };
};

export const updatePatient = (patient: Patient): Action => {
  return { type: "UPDATE_PATIENT", payload: patient };
};

export const setDiagnoses = (diagnoses: Diagnosis[]): Action => {
  return {type: "SET_DIAGNOSES", payload: diagnoses};
};

export const addEntry = (entry:  Patient): Action => {
  return {type: "ADD_ENTRY", payload: entry};
};