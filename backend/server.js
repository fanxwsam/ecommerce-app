import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);  
})


app.get('/', (req, res) => {
    res.send('Server is ready @ your request.');
});

app.get('/abc', (req, res) => {
    res.send('Server is ready. ABC');
});

const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log(`Server ready at http://localhost:${port}`);
});

