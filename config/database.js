const mongoose = require('mongoose');

const server = `${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
const database = 'studentEnrollmentDB';

class Database {
	constructor() {
		this._connect()
	}

	_connect() {
		mongoose.connect(`mongodb+srv://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
			.then(() => {
				console.log('Database connection successful')
			})
			.catch(err => {
				console.error(err);
			})
	}
}

module.exports = new Database();