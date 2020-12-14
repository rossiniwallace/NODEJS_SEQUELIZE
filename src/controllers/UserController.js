const User = require('../models/User');

module.exports = {

  async index(request, responde){
    const users = await User.findAll();

    return responde.json(users); 
  },

  async store(request, response){
    const { name, email } = request.body;

    const user = await User.create({name,email});

    return response.json(user);
  }
}