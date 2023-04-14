import {Entity, Allow, Fields, Validators, IdEntity} from 'remult';

@Entity('users', {
    allowApiCrud: true,
})
export default class User extends IdEntity{
    
    @Fields.uuid()
    id: string = '';

    @Fields.string({
        validate: Validators.required
    })
    name = '';

    @Fields.string({
        validate: Validators.required
    })
    email = '';

    @Fields.string({
        validate: Validators.required
    })
    password = '';
}