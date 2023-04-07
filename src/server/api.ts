import {remultExpress} from 'remult/remult-express'
import Tweet from '../shared/Tweet';
import User from '../shared/User'

export const api = remultExpress({
    entities: [Tweet, User],
    getUser: req => req.session!['user']
});
