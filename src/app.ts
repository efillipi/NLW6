import 'dotenv/config'
import express from 'express';

const app = express();

app.use(express.json());

app.get('/test', (resquest, response) => {

  return response.send('Olá NLW');

})

app.post('/test', (request, response)=>{

  console.log(request.body);

  return response.json(request.body)

})

export default app
