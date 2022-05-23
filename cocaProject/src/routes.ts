import { Router } from "express";
import UserRoute from './Controller/UserControllers'

class Routes{
    static define (route:Router):Router{
        route.use('/user', UserRoute)

        return route
    }
}

export default Routes.define(Router());