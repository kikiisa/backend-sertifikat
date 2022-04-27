const bcrypt = require('bcrypt');
const Users = require('../models/UsersModels');

const up = async () =>
{
    const users = await Users.create({
        name:'Mohamad Rizky Isa',
        email:'kikiisa89@gmail.com',
        roles:1,
        password: await bcrypt.hashSync('123',10),
        createdAt:new Date(),
        updatedAt:new Date()
    })
} 

const down = async () =>
{
    const users = await Users.drop();
}