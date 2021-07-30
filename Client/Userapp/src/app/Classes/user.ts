import { Post } from "./post";
import { Todo } from "./todo";

export class User {
        
        constructor(public _id? : String , 
                    public name? : String,
                    public email? : String,
                    public street? : String,
                    public city? : String,
                    public zipcode? : Number,
                    public todos? :Array<Todo>,
                    public posts? :Array<Post>
                    )
                    {}
    

}
