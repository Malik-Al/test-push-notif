const express = require('express')
const app = express()
const PORT = 8000


app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html')
})

const start = async () => {
    try {
        await app.listen(PORT,() => console.log('server started %s', PORT) )
    }catch (e) {
        new Error(e)
    }
}

start()


// отправка для OIS
// {
//     "notification": {
//     "title": "сука бляч",
//         "body": "This is an FCM Message",
//         "icon": "/ab-logo.png"
// },
//     "to":"Token is: **********"
// }