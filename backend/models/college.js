import mongoose from 'mongoose';

class Colleges {
    constructor() {
		const CollegesSchema = new mongoose.Schema({
            school: String,
            location: String,
            tel: String,
            email: String,
            type: String,
            tuition: String,
            reviews: {
                review_id: Number,
                user: {
                    type: String,
                    require: true,
                },
                review: String,
            }
		});

		this.model = mongoose.model('Colleges', CollegesSchema);
	}
}

module.exports = Colleges;
