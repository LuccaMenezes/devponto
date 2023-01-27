const mongoose = require('mongoose')

async function main() {
   await mongoose.connect('mongodb://localhost:27017/devponto')
   console.log("Conectou ao Mongoose")
}

main().catch.apply((err) => console.log(err))

module.exports = mongoose