const express = require("express")
const app = express()

/* para o app saber que se esta usando ejs*/
app.set("view-engine", "ejs")

/* setting up one route*/
app.get('/', (request, response)=>{
    response.render('index.ejs', {name: "Ramon"})
})

/* setting up one route*/
app.get('/login', (request, response)=>{
    response.render('login.ejs', {name: "Ramon"})
})

/* setting up one route*/
app.get('/register', (request, response)=>{
    response.render('register.ejs')
})


app.listen(3000)

/* http://localhost:3000/ */

/*
https://www.youtube.com/watch?v=ENrzD9HAZK4&ab_channel=Fireship
12:45

https://www.youtube.com/watch?v=-RCnNyD0L-s&ab_channel=WebDevSimplified
5:35
*/ 