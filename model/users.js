

const {v4:uuidv4}= require('uuid')


 class Users {


    #users = []




    list(){


        return this.#users
    }

    find(name){
            const users =  this.#users.find((element)=>element.name.toLocaleLowerCase() === name.toLocaleLowerCase())
            if(users){

                return users
            }
            return false

            
        }

    create(name,email,age){

        this.#users.push({id:uuidv4(),name,email,age})

       // return this.#users[this.#users.length-1]

    }


    delete(id){
       const index = this.#users.findIndex((element)=>element.id === id)

       this.#users.splice(index,1)

      // return this.#users

    }

    update(id,name,email,age){

        const index = this.#users.findIndex((element)=>element.id === id)

        if(index){
               this.#users[index]= {id,name,email,age}
            return true
        }

        return false


     

       

        






    }





    

    


}

module.exports = Users


