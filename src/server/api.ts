import {remultExpress} from 'remult/remult-express'
import Tweet from '../shared/Tweet';
import User from '../shared/User'
import UserController from '../shared/UserController';

export const api = remultExpress({
    entities: [Tweet, User],
    controllers: [UserController],
    getUser: req => req.session!['user']
});
