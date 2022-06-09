import express from 'express';
import calculateBmi from './bmiCalculator';
import exerciseCalculate from './exerciseCalculator';
const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('hello full stack');
});

app.get("/bmi", (req, res) => {
    const weight = Number(req.query.weight);
    const height = Number(req.query.height);
    
    if (!weight || !height || height < 0 || weight < 0) {
      return res.json({ error: "malformatted parameters" });
    }
    const result = calculateBmi(height, weight);
    return res.json({ weight: weight, height: height, bmi: result });
  });


app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {daily_exercises, target} = req.body;
    //console.log('req.body', req.body);
    
    if (!target || !daily_exercises) {
        return res.json({error: "parameters missing"});
    } 
    if (isNaN(Number(target)) || !Array.isArray(daily_exercises)) {
        return res.json({error: "malformatted parameters"});
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = exerciseCalculate(target, daily_exercises);
    return res.send(result);

});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});