let messages = [];
let id = 0;


module.exports = {
    create: (request, response) => {
        let message = {
            text: request.body.text,
            time: request.body.time,
            id: id
        }
        messages.push(message)
        id++
        response.status(200).send(messages)
    },
    read: (request, response) => {
        response.status(200).send(messages);
    },
    update: (request, response) => {
        let index = null;
        messages.forEach((message, i) => {
            if(message.id === (+request.params.id)) index = i; 
        })
        messages[ index ] = {
            id: messages[index].id,
            text: request.body.text || messages[index].text,
            time: request.body.time    
        };
        response.status(200).send(messages);
    },
    delete: (request, response) => {
        let index = null;
        messages.forEach((message, i) => {
            if(message.id === Number(request.params.id)) index = i;
            
        
    })
            messages.splice(index, 1)
            response.status(200).send(messages);
}
}