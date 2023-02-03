const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Graduation Project Start Up!!')
})

app.listen(PORT, () => {
    console.log(`Brights-api listening to port: ${PORT}`);
})