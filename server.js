const express = require('express')
const db = require('./models')
const routes = require('./routes/api-routes')
const PORT = 3000

const app = express()

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(express.static('public'))

app.use(routes)


db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`))
})