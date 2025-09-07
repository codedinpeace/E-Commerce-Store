const mongoose = require('mongoose')

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("MongoDB connected Successfully💹")
    } catch(error) {
        console.error("MongoDB connection error:", error) // Show actual error
        process.exit(1) // Exit if DB connection fails
    }
}

module.exports = connection