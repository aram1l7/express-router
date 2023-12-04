// this shim is required
import { createExpressServer } from 'routing-controllers';

import { AppDataSource } from "./data-source"

const app = createExpressServer({
  controllers: [], // we specify controllers we want to use
});

async function init(){
  try {
  
    await AppDataSource.initialize()
  
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)
  
    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)
  
    console.log("Here you can setup and run express / fastify / any other framework.")
  } catch(error) {
    console.log(error)
  }
}

init()


app.listen(4040);