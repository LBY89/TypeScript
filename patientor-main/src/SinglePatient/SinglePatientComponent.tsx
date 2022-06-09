import { Button } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import AddEntryModal from "../AddEntryModal ";
import { EntryFormValues } from "../AddEntryModal /AddEntryForm";
import { apiBaseUrl } from "../constants";
import { addEntry, useStateValue } from "../state";
import { Diagnosis, Entry, Patient } from "../types";
import HealthCheckEntryC from "./HealthCheckEntryC";
import HospitalEntryC from "./HostpitalEntryC";
import OccupationalHealthcareEntryC from "./OccupationalHealthcareEntry";

const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };
  

const EntryDetails: React.FC<{entry: Entry, diagnoses: Diagnosis[]}> = ({ entry, diagnoses }) => {
    console.log('entry', entry);
  
    switch (entry.type) {
      case "Hospital":
        return <HospitalEntryC entry={entry} diagnoses={diagnoses}/>;
      case "OccupationalHealthcare":
        return <OccupationalHealthcareEntryC entry={entry} diagnoses={diagnoses}/>;
      case "HealthCheck":
        return <HealthCheckEntryC entry={entry} diagnoses={diagnoses}/>;
      case undefined:
        return <HealthCheckEntryC entry={entry} diagnoses={diagnoses}/>;
      default:
        return assertNever(entry);
    }
  };

const SinglePatientComponent =({singlePatient}:{singlePatient: Patient})=> {
    const [{diagnoses}, dispatch] = useStateValue();
    const [{patients}] = useStateValue();
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>();
    const { id } = useParams<{ id: string }>();
    const openModal = (): void => setModalOpen(true);
    console.log('singlePatient near EntryDetail', singlePatient);
    console.log('patients near EntryDetail', patients);
    const closeModal = (): void => {
        setModalOpen(false);
        setError(undefined);
    };

    const submitNewEntry = async (values: EntryFormValues) => {
        try {
          const { data: newEntry } = await axios.post<Patient>(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${apiBaseUrl}/patients/${id}/entries`,
            values
          );
          console.log('newEntry', newEntry);
          
          dispatch(addEntry(newEntry));
          closeModal();
        } catch (e: unknown) {
          if (axios.isAxiosError(e)) {
            console.error(e?.response?.data || "Unrecognized axios error");
            setError(String(e?.response?.data?.error) || "Unrecognized axios error");
          } else {
            console.error("Unknown error", e);
            setError("Unknown error");
          }
        }
      };
    return(
        <div>
            <p>ssh: {singlePatient.ssn}</p>
            <p>occupation: {singlePatient.occupation}</p>
            <div>
            <h4>entries</h4>
            {singlePatient.entries && Object.values(singlePatient.entries).map((entry: Entry) => (
                <EntryDetails key={entry.id} entry={entry} diagnoses={diagnoses}/>
            ))}
            <AddEntryModal
                modalOpen={modalOpen}
                onSubmit={submitNewEntry}
                error={error}
                onClose={closeModal}
            />
            <Button variant="contained" onClick={() => openModal()}>
                Add New Entry
            </Button>
            </div>
        </div>
    );
};

export default SinglePatientComponent;