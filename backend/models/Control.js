const mongoose = require('../db/conn')
const { Schema } = mongoose

const Control = mongoose.model(
   'Control',
   new Schema({
      data: {
         type: String,
         required: true
      },
      diasemana: {
         type: String,
         required: true
      },
      marc1: {
         type: Date
      },  
      marc2: {
         type: Date
      }, 
      marc3: {
         type: Date
      }, 
      marc4: {
         type: Date
      }, 
      totalhoras: {
         type: Date
      },  
      saldohorasdia: {
         type: Date
      }, 
      user: Object,
      },
      { timestamps: true },
   ),
)

module.exports = Control