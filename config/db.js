const mongoose = require('mongoose')


const MONGO_URI = process.env.MONGO_URI;
const ATLAS_URI = process.env.ATLAS_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`Connected to ${MONGO_URI}`);
    } catch (err) {
        console.error(`Failed to connect to ${MONGO_URI}: ${err.message}`);
        if (ATLAS_URI) {
            console.log(`Trying to connect to ${ATLAS_URI}`);
            try {
                await mongoose.connect(ATLAS_URI);
                console.log(`Connected to ${ATLAS_URI}`);
            } catch (err) {
                console.error(`Failed to connect to MongoDB`, err);
                process.exit(1);
            }
        } else {
            console.error('No Atlas URI provided.');
            process.exit(1);
        }
    }
};

module.exports = {connectDB};