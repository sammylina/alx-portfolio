import express, {Router} from 'express';
import { remult } from 'remult';
import User from '../shared/User'
import {api} from './api'


const auth = Router();

auth.use(express.json());


auth.post('/api/signin', api.withRemult /**requied to use User request object*/, async (req, res) => {

    // create User request object
    const userRepo = remult.repo(User)

    try {
        const user = await userRepo.findFirst({
            name: req.body.name,
            password: req.body.password
        })

        // add user to session
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

// on signout remove user from session: (this will revoke some access from the user)
auth.post('/api/signout', (req, res) => {
    req.session!['user'] = null;
    res.json('signed out successfuly')
})

// get currently loggedin user from session
auth.get('/api/currentUser', (req, res) => {
    res.json(req.session!['user'])
})

export default auth;