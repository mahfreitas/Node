//http é um módulo do node que faz conexões??? (requisições e respostas)
const http = require('http')
// quando existe uma conexão com a rede precisa de uma porta para o processo
// quando chegar nessa porta esse processo sabe como lidar 
const port = 3000

//createServer é um método do modulo http, que retorna uma instância da classe http.server(como um molde com tudo que o servidor precisa ter)
const server = http.createServer((req,res)=>{
        
        //res.setHeader('Content-Type','text/html')
        res.end('Oi Mundo')

})

// com o servidor criado tenho acesso a dois métodos close() e listen()
// método listem com dois parametros, primeiro porta que ele vai ouvir 
// segundo é uma arrow function que vai avisar no console
// estou passando uma função como parametro entra no conceito da callback?
server.listen(port,()=>{
    console.log(`Servidor na porta ${port}`)
})