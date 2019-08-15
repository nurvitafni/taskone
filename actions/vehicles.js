const Vehicle = require("../models/vehicle")
const User = require("../models/user")

const create = async (req) => {
    let { brand, price, owner } = req.body
    price = parseInt(price)
    var insert_data = {
        brand,
        price,
        owner
    }

    let data = new Vehicle(insert_data)

    try {
        await data.save()

        return data
    } catch(err) {
        throw err
    }
}

// const getAll = async () => {
//     try {
//         let query = await Vehicle.find({}).exec()
//         let data = query.map((v, i) => {
//             return {
//                 brand: v.brand,
//                 price: v.price
//             }
//         })

//         return data
//     } catch(err) {
//         throw err
//     }
// }

const getAll = async () => {
    let query = await Vehicle.find({})
        .populate([
            {
                path: 'owner',
                model: User
            }
        ]).exec()
    console.log(`Result ${query}`)

    return query
}

const getDetail = async (id) => {
    try {
        let query = await Vehicle.findOne({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

const update = async (id, updated_data) => {
    let { brand, price, fresh } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        brand,
        price
    }

    try {
        let query = await Vehicle.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch(err) {
        throw err
    }
}

const destroy = async (id) => {
    try {
        let query = await Vehicle.findOneAndDelete({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

module.exports = {
    create,
    getAll,
    getDetail,
    update,
    destroy
}