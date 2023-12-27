const mongoose = require('mongoose')

const url = 'mongodb+srv://mrigankasekharsm:ms.sm22@parkinglotdb.xixl0kg.mongodb.net/?retryWrites=true&w=majority'

const conn = async () => {
    try {
        const reslt = await mongoose.connect(url)
        if (reslt) {
            console.log(`DB Successfully Connected...`)
        }
    } catch (error) {
        console.error(error)
    }
}
conn()
