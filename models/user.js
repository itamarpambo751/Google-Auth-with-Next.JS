import mongoose , { Schema, models } from "mongose"

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const User = models.User || mongoose.model('User', userSchema)

export default User