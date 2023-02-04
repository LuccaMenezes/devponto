const Control = require('../models/Control')

// helpers
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')

module.exports = class ControlController {
   static async create(req, res) {

      const token = getToken(req)
      const user = await getUserByToken(token)

      const { data, diasemana, marc1, marc2, marc3, marc4, totalhoras, saldohorasdia } = req.body

      const control = new Control({
         data,
         diasemana,
         marc1,
         marc2,
         marc3,
         marc4,
         totalhoras,
         saldohorasdia,
         user: {
            _id: user._id,
            nome: user.nome,
            cargahoraria: user.cargahoraria,
         },
      })

      try {
         const newControl = await control.save()
         res.status(201).json({
            message: 'Ponto cadastrado com sucesso!',
            newControl,
         })
      } catch (error) {
         res.status(500).json({message: error})
      }
   }
}