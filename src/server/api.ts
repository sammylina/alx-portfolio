import {remultExpress} from 'remult/remult-express'
import Tweet from '../shared/Tweet';
import {createPostgresConnection} from 'remult/postgres'
import User from '../shared/User'

export const api = remultExpress({
    entities: [Tweet, User],
    getUser: req => req.session!['user'],
   dataProvider: 
       createPostgresConnection({
           connectionString: process.env[
               'DATABASE_URL' 
           ] || 'postgres://sammy:sammy@localhost:5432/alx'
       })
});
