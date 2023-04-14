import express, {Router} from 'express';
import { remult } from 'remult';
import User from '../shared/User'
import {api} from './api'


const auth = Router();

auth.use(express.json());


auth.post('/api/signin', api.withRemult, async (req, res) => {
    const userRepo = remult.repo(User)
    try {
        const user = await userRepo.findFirst({
            name: req.body.name,
            password: req.body.password
        })

        if (user){
            req.session!['user'] = user;
            res.json(user)
        } else {
            res.status(404).json("Inavalid email or password")
        }
    } catch(e: any) {
        return res.json({error: e.message})
    }
})

auth.post('/api/signout', (req, res) => {
    req.session!['user'] = null;
    res.json('signed out successfuly')
})

auth.get('/api/currentUser', (req, res) => {
    res.json(req.session!['user'])
})

export default auth;