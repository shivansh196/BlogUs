let user
const dbname = 'blogUs';
const collection_name = 'users';
export default class UserDAO{
    static async injectDB(connect){
        if(user)
            return;

        try{
            user = await connect.db(dbname).collection(collection_name);
        } catch(e){
            console.error(`unable to connect in UserDAO : ${e}`);
        }
    }
}