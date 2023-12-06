const mongoose = require('mongoose')

const url = 'mongodb+srv://mshshyamgroup:msh.sm=32@parkinglotdb.qrdsk4i.mongodb.net/?retryWrites=true&w=majority'

// mongoose.connect(url).then(() => {
//     console.log(`DB Connection Successfull...`);
// }).catch(err => console.error(err))

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
