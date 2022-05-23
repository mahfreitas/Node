import { SetupApplication } from "./app"

class ServerApplication {
    static start():void{
        const application = new SetupApplication(8080)
        application.init()
        application.start()

    }
}

ServerApplication.start()