const express = require("express")
const mongoose = require('mongoose')
const app = express()

require('./models/home')

const Home = mongoose.model('Home')

app.use(express.json())

mongoose.connect('mongodb+srv://webpage:webpage@cluster0.zd83r.mongodb.net/webpage?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Success: The <webpage-api> API successfully connected to the <webpage> database ")
}).catch((err) => {
    console.log("Error: The <webpage-api> API was unable to successfully connect to the <webpage> database " + err)
})

app.get('/home', (req, res) => {
    res.json({
        error: false,
        nome: ''
    })
})

app.post('/home', (req, res) => {
    Home.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Conteúdo da pagina não cadastrado."
        })
    })

    return res.json({
        error: false,
        message: "Seccess: Conteúdo da pagina cadastrado."
    })
})

app.listen(3333, () => {
    console.log('Server <webpage-api> running in port 3333 and address: http://localhost:3333')
})