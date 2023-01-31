const multer = require('multer')
const path = require('path')

const imageStorage = multer.diskStorage({
   destination: function (req, file, cb) {

      let folder = ""

      if (req.file) {
         image = req.file.filename
      }

      if(req.baseUrl.includes("users")) {
         folder = "users"
      } else if (req.baseUrl.includes("controls")) {
         folder = "control"
      }

      cb(null, `public/images/${folder}`)
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
   }
})

const imageUpload = multer({
   storage: imageStorage,
   fileFilter(req, file, cb) {
      if(!file.originalname.match(/\.(png|jpg)$/)) {
         return cb(new Error("Por favor, envie apenas jpg ou png!"))
      }
      cb(undefined, true)
   }  
})

module.exports = {imageUpload}