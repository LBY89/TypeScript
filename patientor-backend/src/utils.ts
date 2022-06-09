// import { Gender, Entry, PatientWithoutId } from "./types";

// const isString = (text: unknown): text is string => {
//     return typeof text === 'string' || text instanceof String;
//   };

// const parseName = (name: unknown): string => {
//   if (!name || !isString(name)) {
//     throw new Error('Incorrect or missing name');
//   }
//   return name;
// };

// const isDate = (date: string): boolean => {
//   return Boolean(Date.parse(date));
// };

// const parseDateOfBirth = (dateOfBirth: unknown): string => {
//   if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
//       throw new Error('Incorrect or missing dateOfBirth: ' + dateOfBirth);
//   }
//   return dateOfBirth;
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const isGender = (param: any): param is Gender => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//   return Object.values(Gender).includes(param);
// };

// const parseGender = (Gender: unknown): Gender => {
//   if (!Gender || !isGender(Gender)) {
//       throw new Error('Incorrect or missing Gender: ' + Gender);
//   }
//   return Gender;
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const isEntry = (param: any): param is Entry => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//   return Object.values(Entry).includes(param);
// };


// const parseEntry = (Entry: unknown): Entry => {
//   if (!Entry || !isEntry(Entry)) {
//       throw new Error('Incorrect or missing Entry ' + Entry);
//   }
//   return Entry;
// };


// type Fields = { name : unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown, entries: unknown };

// const toNewPatientEntry = ({ name, dateOfBirth, ssn, gender, occupation } : Fields): PatientWithoutId => {

//     const newEntry: PatientWithoutId = {
//       name: parseName(name),
//       dateOfBirth: parseDateOfBirth(dateOfBirth),
//       ssn: parseName(ssn),
//       gender: parseGender(gender),
//       occupation: parseName(occupation),
//       entries: parseEntry(Entry)
//     };
//     //console.log('newEntry', newEntry);
    
  
//     return newEntry;
//   };


  
//   export default toNewPatientEntry;
  