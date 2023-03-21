import {Entity, Fields} from 'remult'

@Entity('tweets', {
    allowApiCrud: true
})

export default class Tweet {
    @Fields.uuid()
    id: string = ''

    @Fields.string()
    value = '';

    @Fields.createdAt()
    postedAt = new Date();
}