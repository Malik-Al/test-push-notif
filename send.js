const axios = require('axios')

const db = {
    data: {
        notification: {
            title: "Malik Hello",
            body: "This is an FCM Message",
            icon: "/ab-logo.png"
        }
    },
    to:"token device"
}

const head = {
    Authorization: "server key token"
}



async function sendMessage(){
    try {
        const response = await axios.post('https://fcm.googleapis.com/fcm/send', db, {headers: head})
        console.log('response.data', response.data)
        return response
    }catch (e) {
        console.log(e)
    }
}

(async function (){
  return  await sendMessage()
})()