import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const SALT_FACTOR = 10;

const userSchema = new mongoose.Schema({
    name: { type: String, default: 'Denis' },
    age: { type: Number, default: 26 },
    email: { type: String, default: 'designid@mail.ru' },
    password: { type: String },
    salt: {type: String}
})
userSchema.pre('save', function (next) {
    let user = this;
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        user.salt = salt;
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            next();    
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, next) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        next(undefined,isMatch)
    })
}

export default mongoose.model('User', userSchema);