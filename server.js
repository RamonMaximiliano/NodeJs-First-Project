const express = require("express")
const app = express()
//npm install bcrypt: used to has passwords and encrypt decrypt them
const bcrypt = require("bcrypt")
const passport = require("passport")

const initializePassport = require("./passport-config")
initializePassport(passport, email => {
    return users.find(user => user.mail === email)
})


//this variable was created to store users instead of using a database since this is a simple project
const users = []

/* para o app saber que se esta usando ejs*/
app.set("view-engine", "ejs")

//Is telling the app that I want to take form content and be able to access them inside of the request variable inside of the post method
app.use(express.urlencoded({ extended: false }))


/* setting up one route*/
app.get('/', (request, response) => {
    response.render('index.ejs', { name: "Ramon" })
})

/* setting up one route*/
app.get('/login', (request, response) => {
    response.render('login.ejs', { name: "Ramon" })
})

app.post('/login', (request, response) => {

})

/* setting up one route*/
app.get('/register', (request, response) => {
    response.render('register.ejs')
})


//Utilizando o async abaixo, pois o processo de encriptar a password pode demorar
app.post('/register', async (request, response) => {
    //in the register.ejs file, the name of the inputs corresponds to what is here in the end request.body.email, request.body.password etc
    try {
        //utilizou o bcrypt para encriptar a password digitada
        const hashedPassword = await bcrypt.hash(request.body.password, 10)
        users.push({
            //usando a data do momento da criação para fazer um unique identifier do user
            id: Date.now().toString(),
            name: request.body.name,
            email: request.body.email,
            password: hashedPassword
        })
        //se deu tudo certo direciona ele para a tela de login
        response.redirect('/login')
    }
    catch {
        //se deu tudo errado direciona ele para a tela de register para tentar de novo

        response.redirect('/register')
    }
    console.log(users)
})

app.listen(3000)

/* http://localhost:3000/ */

/*

https://www.youtube.com/watch?v=Ud5xKCYQTjM&ab_channel=WebDevSimplified


https://www.youtube.com/watch?v=ENrzD9HAZK4&ab_channel=Fireship
12:45

https://www.youtube.com/watch?v=-RCnNyD0L-s&ab_channel=WebDevSimplified
22:40



*/ 