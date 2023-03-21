import {remultExpress} from 'remult/remult-express'
import Tweet from '../shared/Tweet';

export const api = remultExpress({
    entities: [Tweet]
});
