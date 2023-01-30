const User = require('../models/User')

const bcrypt = require('bcrypt')

module.exports = class UserController {
   static async register(req, res) {      
      const { nome, email, senha, confirmpassword, phone, empresa, cargahoraria } = req.body

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
         res.status(422).json({message: 'A confirmação de senha é obrigatória' })
         return
      }
      if(!phone) {
         res.status(422).json({message: 'O telefone é obrigatório' })
         return
      }
      if(!empresa) {
         res.status(422).json({message: 'O nome da empresa é obrigatória' })
         return
      }
      if(!cargahoraria) {
         res.status(422).json({message: 'Informe a Carga horaria do funcionário' })
         return
      }

      if(senha !== confirmpassword) {
         res.status(422).json({message: 'As senhas devem ser iguais!' })
         return
      }

      //check if user exists
      const userExists = await User.findOne({email: email})

      if(userExists) {
         res.status(422).json({
            message: 'E-mail já cadastrado',
         })
         return
      }

      //create a password
      const salt = await bcrypt.genSalt(12)
      const passwordHash = await bcrypt.hash(senha, salt)

      //create a user
      const user = new User({
         nome,
         email,
         phone,
         senha: passwordHash,
         empresa,
         cargahoraria,
      })

      try {        
         const newUser = await user.save()
         res.status(201).json({message: 'Usuário criado com sucesso!', newUser, })
      } catch (error) {
         res.status(500).json({message: error})
      }
   }
}