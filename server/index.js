const express = require('express')
const bodyParser = require('body-parser')
const mess = require('./controllers/messages_controller')


const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', mess.create)

app.get('/api/messages', mess.read)

app.put('/api/messages/:id', mess.update)

app.delete('/api/messages/:id', mess.delete)




app.listen(3000, () => {console.log("I am listening")})