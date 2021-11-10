import mongoose from 'mongoose';

class user {
    constructor() {
		const userSchema = new mongoose.Schema({
			email: {
                type: String,
                require: true,
            },
            username: {
                type: String,
                require: true,
            },
            phone: {
                type: String,
                require: true,
            },
            password: {
                type: String,
                require: true,
            }
		});

		this.model = mongoose.model('user', userSchema);
	}
}

module.exports = user;