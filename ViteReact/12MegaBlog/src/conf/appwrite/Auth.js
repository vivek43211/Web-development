import conf from '../conf'
import { Client, Account, ID } from "appwrite";

export class Authservier {
    client  = new Client();
    Account;


    constructor(){
        this.client
                 .setProject(conf.appwriteProjectId);
       this.Account = new Account(this.client);

    }

    async createAccount ({email , password , name} ){
       try {
       const useraccount =  await this.Account.create(ID.unique() , email , password , name  );
       if (useraccount) {
        // we want user to login in account as it sign up so we call the another 
        return this.LoginAccount({email,password})
       } else {
        return useraccount;
       }
       } catch (error) {
         throw error;
       }
    }

    async LoginAccount ({email , password}){
        try {
            return await this.Account.createEmailPasswordSession(email,password)
            
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
     try {
        return await this.Account.get();
     } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
     }
    }

    async logout(){
        try {
            return await this.Account.deleteSessions() // to logout from all the borwers if we want to get only from cureent we pefer to use (deletecurrentsession())
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }



}
// whenvwe the object is made then the client is made and have access to account fot that we have to use 
// consturctor that call itself without any parameter
const authservice  = new Authservier()
export default authservice;