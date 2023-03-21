import express from 'express';
import {api} from './api'

const app = express();
app.use(api);

app.get('/', (req, res) => {
    res.json({msg: 'server is listening'})
})

app.listen(3200, ()=> {
    console.log("server running on port 3200")
})