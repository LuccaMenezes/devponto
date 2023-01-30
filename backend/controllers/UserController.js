const User = require('../models/User')

module.exports = class UserController {
   static async register(req, res) {      
      const { nome, email, senha, confirmpassword, phone } = req.body

      //validations
      if(!nome) {
         res.status(422).json({message: 'O nome é obrigatório' })
         return
      }
      if(!email) {
         res.status(422).json({message: 'O e-mail é obrigatório' })
         return
      }
      if(!senha) {
         res.status(422).json({message: 'A senha é obrigatória' })
         return
      }
      if(!confirmpassword) {
         res.status(422).json({message: 'A confirmação da senha é obrigatória' })
         return
      }
      if(!phone) {
         res.status(422).json({message: 'O telefone é obrigatório' })
         return
      }

      if(senha !== confirmpassword) {
         res.status(422).json({message: 'As senhas devem ser iguais!' })
         return
      }

      //check if user exists
      const userExists = await User.findOne({email: email})
   }
}