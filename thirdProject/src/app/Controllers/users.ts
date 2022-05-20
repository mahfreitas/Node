import { request, response, Router } from 'express';
import { Connect, Query } from '../Config/mysql';
import { User } from '../models/user_model';

const router = Router()




router.get('/', (request, response) => {
    let query = 'SELECT * FROM users;'
    Connect()
        .then(
            Connection => {
                Query(Connection, query)
                    .then(results => { return response.status(200).json({ results }) })
                    .catch((error) => {
                        console.log(error.message)
                        return (response.status(500).json({ message: error.message, error }))
                    });
            }
        )
        .catch((error) => {
            console.log(error.message)
            return (response.status(500).json({ message: error.message, error }))
        })
})

router.post('/', (request, response) => {

    const postman: User = {
        nome:request.body.nome,
        sobrenome: request.body.sobrenome
    }

    let query = `INSERT into users (nome,sobrenome) values("${postman.nome}","${postman.sobrenome}")`
    Connect()
        .then(Connection => {
            Query(Connection, query)
                .then(() => { return response.status(200).json({ message: "Parabéns Mariane, seu insert funcionou!" }) })
                .catch((error) => {
                    console.log(error.message)
                    return (response.status(500).json({ message: error.message, error }))
                })
        })
        .catch((error) => {
            console.log(error.message)
            return (response.status(500).json({ message: error.message, error }))
        })

})

export default router;