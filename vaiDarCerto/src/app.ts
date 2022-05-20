import  { Server } from 'http'; 
import  Express  from 'express';
import bodyParser from 'body-parser';
import route from './routes'


export class SetupApplication {

    private server?: Server;

    constructor( private port:Number = 3000,  public app=Express()){}

    public init():void {
        this.SetupExpress();
        this.SetupRoutes();

    }

    private SetupRoutes():void{
        this.app.use(route)

    }

    private SetupExpress():void{
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:true}))
    }

    public start():void {
        this.server = this.app.listen(this.port,()=>{
            console.log(`Server running in the port ${this.port}`)
        })
    }
}