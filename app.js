const express = require('express')
// const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
// const { sequelize } = require('./db/sequelizeSetup')
app.use(express.json())
// app.use(morgan('dev'))
// app.use(cookieParser())

app.use(express.json())
app.use(cors()); 
// attention a l'ordre de l'utilisation de cors

app.get('/', (req, res) => {
    // Exemple d'un cookie de première visite d'un site

    // console.log(req.cookies)
    // res.cookie('monapirest_estdejavenu', true)
    // if (req.cookies.monapirest_estdejavenu) {
    //     res.json('Hello World !')
    // } else {
    //     res.json('Salut tu es nouveau !')
    // }

    res.json('Hello World !')
})

const coworkingRouter = require('./routes/coworkingRoutes')
const userRouter = require('./routes/userRoutes')
const reviewRouter = require('./routes/reviewRoutes')

app.use('/api/coworkings', coworkingRouter)
app.use('/api/users', userRouter)
app.use('/api/reviews', reviewRouter)


app.use('/uploadedFiles', express.static(__dirname + '/uploadedFiles'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})