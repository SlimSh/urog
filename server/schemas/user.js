import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const SALT_FACTOR = 10;

const getSalt = (min, max) => {
    return Math.round(Math.random() * (max - min) + min) + Date.now();
};

const userSchema = new mongoose.Schema({
    name: { type: String, required: 'Name is required' },
    email: { type: String, unique: 'User with email "{VALUE}" is already exist', required: 'Email is required'  },
    phone: { type: String },
    role: {type: String, default: 'user'}, // guest, user, manager, admin, superAdmin
    country: {type: String, default: 'Russia'},
    region: {type: String},
    city: {type: String},
    adress: {type: String},
    coord: {type: String},
    hash: {type: String},
    password: { type: String, required: 'Password is required' },
    lastVisite: {type: Date, default: Date.now},
    isDispatch: {type: Boolean, default: false},
    typeSeller: {type: Array},
    img: {type: String, default: 'user.png'},
    isAutofication: {type: Boolean, default: false },
    desc: {type: String}
}, {
    timestamps: true
});
userSchema.statics.createFields = ['name', 'email', 'phone', 'password'];

userSchema.pre('save', function (next) {
    let user = this;
    if(!user.isModified('password')) return next();

    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password)
}

userSchema.statics.findOneWithPublicFields = function (params, cb) {
    return this.findOne(params, cb).select({password: 0, _id: 0, __v: 0});
}

export default mongoose.model('User', userSchema);