import { request, response, Router } from "express";

const route = Router();

route.get('/', (request,response)=>{
    response.json({
        nome: 'Mariane',
        situacao : 'Conseguiu fazer um get'
    })
})
route.post('/', (request,response)=>{
    const postar = request.body
    response.send(postar)
})

route.put('/:id',(request,response)=>{
    const parametros = request.params
    response.send(parametros)
})

route.delete('/:id',(request,response)=>{
    const parametros = request.params
    response.send(parametros)
})
export default route;