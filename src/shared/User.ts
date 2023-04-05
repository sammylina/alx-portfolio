import {Entity, Allow, Fields} from 'remult';

@Entity('users', {
    allowApiCrud: true,
})
export default class User {
    
    @Fields.uuid()
    id: string = '';

    @Fields.string()
    name = '';

    @Fields.string()
    email = '';

    @Fields.string()
    password = '';
}

//declare module 'remult' {
//    export interface UserInfo {
//        email: string,
//        password: string
//    }
//}