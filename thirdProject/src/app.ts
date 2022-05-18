import { Server } from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import route from './routes';
import './util/module-alias';

export class SetupApplication{
    //  ? antes dos : no typescript quer dizer que pode aceitar um objeto vazio(nulo)
    // Server esta vindo vazio do http
    // private é porque não pode ser visto fora do app?

    private server ?: Server

    //construtores são funções de inicialização de uma classe
    // no constructor é o que acontece assim que ela é instanciado?, quando um objeto dessa classe é criado, não deve ter método de retorno, nem void
    // o que já pode receber
    //typescript: não tem tipo e nem tem retorno
    //nesse construtor estamos recebendo dois parametros
    //um parametro privado que é a porta, porque a porta precisa ser privada?
    // e um parametro publico que é a instacia de express(para instanciar o express no app , não esquecer de importar)
    constructor(private port = 3000, public app = express()){}

    // o que ele vai executar quando a classe for inicializada?chamada?
    //antes de qualquer coisa chama o init
    // o init vai chamar os métodos para configurar as rotas e para configurar os json
    public init (){
        this.SetupExpress()
        this.SetupRoutes()

    }

    //método que  faz a instancia do express , app usar as rotas configuradas/disponíveis
    private SetupRoutes(){
        this.app.use(route)
    }

    //Método que configura o uso do body-parser na instacia do express app
    // Nào esquecer de importar o bodyParser 
    private SetupExpress(){
        this.app.use(bodyParser.json());// converter para json os response?
        this.app.use(bodyParser.urlencoded({extended:true})); //urlenconded pega as requisicões do corpo ?
    }

    // esse é o método que vai colocar o servidor pra funcionar, pois a essa altura o init já chamou os outros dois métodos com as informações dos parametros do construtor.
    // o server que estava vazio, vai receber a porta onde ele escutar
    public start(): void{
        this.server = this.app.listen(this.port,()=>{
            console.log(`Servidor na porta ${this.port}`)
        })
    }
}