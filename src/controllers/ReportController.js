const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(request, response) {

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.like]: '%@gmail.com',
        }
      },
      include: [
        { association: 'addresses', where: { street: 'Rua Dom José' } },
        {
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.like]: "REACT%"
            }
          }
        },
      ]
    });

    return response.json(users);
  }
};