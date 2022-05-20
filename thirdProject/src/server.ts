
import { SetupApplication } from "./app";



class ServerApplication{

    //métodos estáticos são médodos da classe que não dependem de nada para serem chamados?
    //void é sem retorno
    static start ():void{
        // o que o método static do server recebe:
        // a partir dessa nova instancia de setupapplication, o construtor já recebe os parametros da porta 
        const application = new SetupApplication(8080)
        // chama dentro do init os métodos de configuração de rota e do bodyparser
        application.init()
        // no start o servidor é associado a porta de escuta
        application.start()
        


    }
}

// chamando o start ele inicia tudo o que tem dentro do corpo dele

ServerApplication.start()