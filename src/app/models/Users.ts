import mongoose,{Document, Schema} from 'mongoose';
import { unique } from 'next/dist/build/utils';
export interface IUser extends Document{
    email: string;
}

const UserSchema:Schema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const User = mongoose.models.User || mongoose.model<IUser>("User",UserSchema);

export default User;