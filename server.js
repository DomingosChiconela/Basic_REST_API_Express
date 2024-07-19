const express  =  require('express')

const {v4:uuidv4}= require('uuid')
const  Users  = require('./model/users')

const app = express()
app.use(express.json())
const users = new Users()


app.get('/users',(request,response)=>{
    
    
    response.status(200).json(users.list())
})
app.get('/user',(request,response)=>{
        const name = request.query.name

        console.log(name)
        
         const user = users.find(name)
         
         if(user){
             response.status(200).json({...user})
         }
         response.status(404).json({message:'user not found'})
   
})


app.post('/users',(request,response)=>{
     const {name,email,age} =  request.body
 
    try{
          users.create(name,email,age)

    response.status(201).json({message:'user created'})
    }catch(error){
        response.status(500).send({message:error})
    }
   
   
})


app.delete('/users/:id',(request,response)=>{
        const id   = request.params.id
    
     try{
          users.delete(id)

    response.status(204).send('usuario eliminado')
    }catch(error){
        response.status(500).send({message:error})
    }
})


app.put('/users/:id',(request,response)=>{
        const id = request.params.id
        const {name,email,age} = request.body
    
     try{
         if (users.update(id,name,email,age)) {
            response.status(200).json({message:'user updated'})
         }

    response.status(404).json({message:'user not found'})
    }catch(error){
        response.status(500).send({message:error})
    }
} )








app.listen(3333,()=>{
    console.log(`server rodando na porta 3333`)
})



