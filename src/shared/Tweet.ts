import {Entity, Fields, Validators, IdEntity, Field} from 'remult'
import User from './User';


@Entity('tweets', {
    allowApiCrud: true,
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
    usr!: User;/**one to many relation */
}
