import { Server } from 'http'
import Express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'


export class SetupApplication {
    private server?: Server

    constructor(public port: number = 3000,public app = Express()) { }

    public init(): void {
        this.SetupExpress()
        this.SetupRoutes()
    }

    private SetupRoutes(): void {
        this.app.use(routes)
    }

    private SetupExpress(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }

    public start():void{
        this.server = this.app.listen(this.port,()=>{
            console.log(`Servidor rodando na porta ${this.port}`)
        })
    }
} 