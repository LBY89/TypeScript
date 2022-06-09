import express from 'express';
import diagnoseService from '../services/diagnoseService';
//import toNewPatientEntry from '../utils';


const router = express.Router();

router.get('/api/diagnoses', (_req, res) => {
  res.send(diagnoseService.getEntries());
});

router.get('/api/patients', (_req, res) => {
    res.send(diagnoseService.getNonSensitivePatientEntries());
  });
router.get('/api/patients/:id', (_req, res) => {
  console.log('_req.params.id', _req.params.id);
  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  res.send(diagnoseService.findById(_req.params.id));
});
router.post('/api/patients', (req, res) => {
    try {
        
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const addedEntry = diagnoseService.addPatient(req.body);
        res.json(addedEntry);
    }catch(e){
        res.status(400).send(e.messsage);
    }
});
//for 9.23
router.post('/api/patients/:id/entries', (req, res) => {
  try {
      
      console.log('req.body', req.url);
      console.log(req.params.id);
      
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const addedEntry = diagnoseService.addEntry(req.params.id, req.body);
      res.json(addedEntry);
  }catch(e){
      res.status(400).send(e.messsage);
  }
});

router.post('/', (_req, res) => {
  res.send('Saving a diagnose!');
});

export default router;