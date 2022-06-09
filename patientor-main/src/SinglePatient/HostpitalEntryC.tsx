import { Diagnosis, HospitalEntry } from "../types";
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

const HospitalEntryC: React.FC<{entry: HospitalEntry, diagnoses: Diagnosis[]}> = ({ entry, diagnoses }) => {
    return(
      <div key= {entry.id}>
        <hr/>
        {entry.date}{entry.description}
        {entry.diagnosisCodes && entry.diagnosisCodes.map((code, index)=> (
          <li key={index}>
          {code}
          {diagnoses.some(e => e.code === code) ? diagnoses[diagnoses.findIndex(x => x.code ===code)].name : null}
          diagnose by {entry.specialist}
          discharge: {entry.discharge.date} {entry.discharge.criteria}
        </li>
        ))}
        <p>diagnosed by: {entry.specialist}</p>
      </div>
    );
  };

export default HospitalEntryC;