const User = require('../models/User')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//helpers
const createUserToken = require('../helpers/create-user-token')
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')

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
         
         await createUserToken(newUser, req, res)
      } catch (error) {
         res.status(500).json({message: error})
      }
   }

   static async login(req, res) {
      const {email, senha} = req.body

      if(!email) {
         res.status(422).json({message: 'O e-mail é obrigatório' })
         return
      }

      if(!senha) {
         res.status(422).json({message: 'A senha é obrigatória' })
         return
      }

      const user = await User.findOne({email: email})

      if(!user) {
         res.status(422).json({
            message: 'Não há usuário cadastrado com este e-mail',
         })
         return
      }

      // check if password match with db password
      const checkPassword = await bcrypt.compare(senha, user.senha)

      if(!checkPassword) {
         res.status(422).json({
            message: 'Senha inválida',
         })
         return
      }

      await createUserToken(user, req, res)
   }

   static async checkUser(req, res) {

      let currentUser

      if(req.headers.authorization) {

         const token = getToken(req)
         const decoded = jwt.verify(token, 'secret')

         currentUser = await User.findById(decoded.id)

         currentUser.senha = undefined
      } else {
         currentUser = null
      }

      res.status(200).send(currentUser)
   }

   static async getUserById (req, res) {

      const id = req.params.id

      const user = await User.findById(id).select('-senha')

      if(!user) {
         res.status(422).json({message: 'Usuário não encontrado!' })
         return
      }

      res.status(200).json({ user })
   }

   static async editUser(req, res) {
      const id = req.params.id

      const token = getToken(req)
      const user = await getUserByToken(token)

      const { nome, email, senha, confirmpassword, phone, empresa, cargahoraria } = req.body


      if (req.file) {
         user.image = req.file.filename
      }

      //validations
      if(!nome) {
         res.status(422).json({message: 'O nome é obrigatório' })
         return
      }
      if(!email) {
         res.status(422).json({message: 'O e-mail é obrigatório' })
         return
      }

      //check if email has already taken
      const userExists = await User.findOne({email: email})

      if(user.email !== email && userExists) {
         res.status(422).json({message: 'E-mail já cadastrado' })
         return
      }

      user.email = email

      if(senha != confirmpassword) {
         res.status(422).json({message: 'As senhas devem ser iguais' })
         return
      } else if (senha === confirmpassword && senha != null) {      
      //create a password
      const salt = await bcrypt.genSalt(12)
      const passwordHash = await bcrypt.hash(senha, salt)

      user.senha = passwordHash
      }

      try {
         
         await User.findOneAndUpdate(
            {_id: user.id},
            {$set: user},
            {new: true},
         )

         res.status(200).json({message: 'Usuário atualizado com sucesso!'})

      } catch (err) {
         
         res.status(500).json({message: err})
         return
      }
      
      if(!phone) {
         res.status(422).json({message: 'O telefone é obrigatório' })
         return
      }

      user.phone = phone

      if(!empresa) {
         res.status(422).json({message: 'O nome da empresa é obrigatória' })
         return
      }
      if(!cargahoraria) {
         res.status(422).json({message: 'Informe a Carga horaria do funcionário' })
         return
      }      
   }
}