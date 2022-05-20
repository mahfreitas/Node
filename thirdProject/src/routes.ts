import { Router } from 'express';
import UserRouter from './app/Controllers/users';
import ClientesRouter from './app/Controllers/clientes'

class Routes{
    //statict é um método de classe ... melhorar esse conceito
    // o método define recebe como paramentro router do tipo Router e retorna um tipo Router também 
    // o paramentro router, vai ser setado pelo método .use passando o path e a rota
    static define(router:Router):Router{
       // router.use('/users',UserRouter)
       router.use('/produtos',ClientesRouter)
       


        return router;

    }
}

// mandando pra fora do módulo  a class Routes, com o método define que tem como retorno um tipo Router
export default Routes.define(Router());
