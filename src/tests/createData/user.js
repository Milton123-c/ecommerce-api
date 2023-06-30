const User = require("../../models/User")

const user = async()=>{

    const userCreate = {
        firstName: "Milton David",
        lastName: "Gago Mercado",
        email: "miltonmercado92@gmail.com",
        password: "123",
        phone: "+506 70829179"
    }

    await User.create(userCreate)

}
module.exports = user