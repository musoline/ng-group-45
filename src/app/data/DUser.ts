import { IUser } from "../interface/IUser";

export const USERS:IUser[] = []



export class User {
    user!:IUser
    constructor(person:IUser){
        this.user = person
        this.save();
    }

    save(){
        USERS.push(this.user);
    }
}