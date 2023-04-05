import {Entity, Fields, Allow} from 'remult'

@Entity('tweets', {
    allowApiCrud: true,
    //allowApiInsert: Allow.authenticated,
})

export default class Tweet {
    @Fields.uuid()
    id: string = ''

    @Fields.string()
    value = '';

    @Fields.createdAt()
    postedAt = new Date();
}