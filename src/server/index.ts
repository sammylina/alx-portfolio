import express from 'express';
import session from 'cookie-session'
import {api} from './api'
import auth from './auth'

const app = express();


app.use(
    '/api',
    session({
        secret: process.env['SESSION_SECRET'] || 'session_secret'
    })
)
app.use(auth)
app.use(api);

app.get('/', (req, res) => {
    res.json({msg: 'server is listening'})
})

app.use(express.static(process.cwd()+"/dist"))
app.listen(process.env['PORT'] || 3200, ()=> {
    console.log("server running on port 3200")
})