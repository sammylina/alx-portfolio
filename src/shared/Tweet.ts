import {Entity, Fields, Allow, Validators, IdEntity, Field} from 'remult'
import User from './User';

@Entity('tweets', {
    allowApiCrud: true,
    //allowApiInsert: Allow.authenticated,
})

export default class Tweet extends IdEntity{
    @Fields.uuid()
    id: string = ''

    @Fields.string({
        validate: Validators.required
    })
    value = '';

    @Fields.createdAt()
    postedAt = new Date();

    @Field(() => User)
    user!: User;
}