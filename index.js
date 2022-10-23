import express from 'express';
import bodyParser from 'body-parser';

import router from  './routes/users.js';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', router)

app.get('/', (req, res) => {res.send('Hello From HomePage.')})

app.listen(PORT, () => console.log(`Server Running On Port: http://localhost:${PORT}`));