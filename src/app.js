import express, { json } from 'express';
import data from './data.js';
const app = express();
app.use(json());
const PORT = process.env.PORT || 3000;

app.get('/', async(req, res) => {
  res.json({status: true, message: 'Node server is up'})
});

app.get('/data', async(req, res) => {
  res.json({data: data})
})

app.listen(PORT, () => console.log(`Port: ${PORT}`));
