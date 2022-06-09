import { Diagnosis, HealthCheckEntry } from "../types";

const HealthCheckEntryC: React.FC<{entry: HealthCheckEntry, diagnoses: Diagnosis[]}> = ({ entry, diagnoses }) => {
    return (
      <div key= {entry.id}>
        <hr/>
        {entry.date} : {entry.description}
          {entry.diagnosisCodes && entry.diagnosisCodes.map((code, index)=> (
            <li key={index}>
            {code}
            {diagnoses.some(e => e.code === code) ? diagnoses[diagnoses.findIndex(x => x.code ===code)].name : null}
            {entry.healthCheckRating}
            diagnose by {entry.specialist}
          </li>
          ))}
        <p>diagnosed by: {entry.specialist}</p>
      </div>
    );
  };

export default HealthCheckEntryC;