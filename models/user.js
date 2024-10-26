import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,  
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

let User;
try {
    User = mongoose.model("User");
} catch {
    User = mongoose.model("User", userSchema);
}

export default User;
