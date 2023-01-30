const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
async function main() {
   await mongoose.connect('mongodb://localhost:27017/devponto')
   console.log("Conectou ao Mongoose")
}

main().catch((err) => console.log(err))

module.exports = mongoose