const express = require('express')
const app = express()
require("./db") // database connection

/**
 * Import routes files
 */
const index_routes = require("./routes/index")
const vehicle_routes = require("./routes/vehicles")
const users = require("./routes/users")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome here, people.`)
})

/**
 * Set routes imported
 */
app.use("/index", index_routes)
app.use("/vehicle", vehicle_routes)
app.use("/user", users)

app.listen(3302, () => {
    console.log(`Example app listening on port 3302`)
})
