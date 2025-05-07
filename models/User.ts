import { Schema, model, models, Types } from 'mongoose';

export interface IUser {
    _id?: Types.ObjectId;
    email: string;
    userName: string;
    image?: string;
    bookmarks?: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required'],
    },
    userName: {
        type: String,
        required: [true, 'User name is required'],
    },
    image : {
        type: String
    },
    bookmarks: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }
}, {
    timestamps: true
})

const User = models.User || model<IUser>('User', UserSchema);
export default User;