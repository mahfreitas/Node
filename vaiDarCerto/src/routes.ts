import { Router } from 'express'
import UserRouter from './app/controllers/user'

class Routes {
    static define(route:Router):Router{
        route.use('/users',UserRouter)
        return route
    }
}
export default Routes.define(Router())