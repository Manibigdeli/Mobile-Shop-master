export class UserModel{
    constructor(public email:string ,public id:string 
        ,private token:string 
        , private expirationDate:Date){}


get _token(){
    if(!this.expirationDate || new Date()> this.expirationDate){
        return null;
    }
    return this.token
}

}