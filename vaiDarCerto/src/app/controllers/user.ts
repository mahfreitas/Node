import { request, response, Router } from "express";

const router = Router()

router.get('/',(request,response)=>{
    response.json({
        nome:'Mariane',
        feliz:true
    })
})

export default router;

