import mongoose,{Schema} from mongoose;

const account_details = new Schema(
    {
        coinbase_id:{
            type:String,
            required : true,
            unique: true,
            trim: true,
        },
        
        avatar:{
            type:String,
            required:true},

        email:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
      
        

    }
)



export const Account_details = mongoose.model("Account_details");