const express =require('express')
const router = express.Router()
const {UsersController} =require('./controller')

module.exports.UsersAPI=(app)=>{
    router.get('/',UsersController.getUsers)
          .get('/:id',UsersController.getUser)
          .post('/',UsersController.createUser)
    app.use('/api/users',router)
}