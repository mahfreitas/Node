import { request, response, Router } from "express";

const router = Router()

router.get('/',(request,response)=>{
    response.json({
        nome:'Mariane',
        feliz:true
    })
})

router.post('/',(request,response)=>{
    const user = request.body
    response.send(user)
})

router.put('/:nome',(request,response)=>{
    const params = request.params
    response.send(params)
})

export default router;

