import mongoose,{Schema} from mongoose;

const userschema = new Schema(
    {
        username:{
            type:String,
            required : true,
            unique: true,
            lowercase:true,
            trim: true,
            index: true},
        
        avatar:{
            type:String,
            required:true},

        email:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },

        coinbase_id:{
            type:String,
            reuired: true,
            unique:true
        }

        

    }
)



export const User = mongoose.model("User", userschema)