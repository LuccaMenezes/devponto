const mongoose = require('../db/conn')
const { Schema } = mongoose

const Control = mongoose.model(
   'Control',
   new Schema({
      data: {
         type: Date,
         required: true
      },
      diasemana: {
         type: String,
         required: true
      },
      marc1: {
         type: Date,
         required: true
      },  
      marc2: {
         type: Date,
         required: true
      }, 
      marc3: {
         type: Date,
         required: true
      }, 
      marc4: {
         type: Date,
         required: true
      }, 
      totalhoras: {
         type: Date,
         required: true
      },  
      saldohorasdia: {
         type: Date,
         required: true
      }, 
      },
      { timestamps: true },
   ),
)

module.exports = Control