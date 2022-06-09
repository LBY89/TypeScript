import { Diagnosis, OccupationalHealthcareEntry } from "../types";

const OccupationalHealthcareEntryC: React.FC<{entry: OccupationalHealthcareEntry, diagnoses: Diagnosis[]}> = ({ entry, diagnoses }) => {
    return (
      <div key= {entry.id}>
        <hr/>
        {entry.date}{entry.description}
          {entry.diagnosisCodes && entry.diagnosisCodes.map((code, index)=> (
            <li key={index}>
            {code}
            {diagnoses.some(e => e.code === code) ? diagnoses[diagnoses.findIndex(x => x.code ===code)].name : null}
            {entry.employerName}
            diagnose by {entry.specialist}
            sickleave: {entry.sickLeave && entry.sickLeave.startDate && entry.sickLeave.endDate}
          </li>
          ))}
        <p>diagnosed by: {entry.specialist}</p>
      </div>
    );
  };

export default OccupationalHealthcareEntryC;