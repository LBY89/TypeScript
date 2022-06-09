import { useStateValue, updatePatient } from "../state";
//import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams}  from 'react-router-dom';
import { apiBaseUrl } from '../constants';
import { Patient } from '../types';
import React from "react";
import { Icon } from '@iconify/react';
import SinglePatientComponent from './SinglePatientComponent';


const SinglePatient =()=> {

    const [{patients}, dispatch] = useStateValue();
    //{diagnoses} a way of getting data.
    
    
    const { id } = useParams<{ id: string }>();
    
    React.useEffect(() => {
        void axios.get<void>(`${apiBaseUrl}/ping`);
    
        const fetchSinglePatient = async () => {
          try {
            const { data: singlePatientFromApi } = await axios.get<Patient>(
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              `${apiBaseUrl}/patients/${id}`
            );
            dispatch(updatePatient(singlePatientFromApi));
          } catch (e) {
            console.error(e);
          }
        };
        void fetchSinglePatient();
      }, [dispatch]);
    //This solves 9.17
    const singlePatient = Object.values(patients).find((a) => a.id === id);
    console.log('singlePatient', singlePatient);

    if (singlePatient) {
      switch(singlePatient.gender){
        case "male":
          return (
            <div>
              <h2>{singlePatient.name}  <Icon icon="ph:gender-male-bold" /></h2>
              <SinglePatientComponent singlePatient={singlePatient} />
            </div>
          );
        case "female":
          return (
            <div>
              <h2>{singlePatient.name}  <Icon icon="ph:gender-female-bold" /></h2>
              <SinglePatientComponent singlePatient={singlePatient} />
            </div>
          );
        case "other":
          return (
            <div>
              <h2>{singlePatient.name}  <Icon icon="icons8:gender" /></h2>
              <SinglePatientComponent singlePatient={singlePatient} />
            </div>
          );
    } 
  }
    return (
        <></>
    );
    
};

export default SinglePatient;