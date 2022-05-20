import { response, Router } from 'express';
import { connect } from '../Config/mongo';

const router = Router();

router.get('/',async(request, response)=>{
    const result = await 
    connect().db().col
})

export default router;