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

// check if the server is alive
app.get('/api/ping', (req, res) => {
    res.json({msg: 'server is listening'})
})

// serve front end from the same server
const frontend = process.cwd()+"/dist";
app.use(express.static(frontend))
app.get('/*', (_, res) => {
    res.send(frontend+'/index.html')
})

app.listen(process.env['PORT'] || 3200, ()=> {
    console.log("server running on port 3200")
})