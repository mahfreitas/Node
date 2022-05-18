import mysql from 'mysql2'
import dados from './senha_DB'



const param = {
    user: dados.user,
    password: dados.password,
    host: dados.host,
    database: dados.database
}

const Connect = async () => new Promise<mysql.Connection>((resolve, reject) => {
    const Connection = mysql.createConnection(param)

    Connection.connect((error) => {
        if (error) {
            reject(error)
            return
        }
        resolve(Connection)
    })
})

const Query = async(Connection:mysql.Connection,Query:string)=> new Promise((resolve, reject)=>{
    Connection.query(Query, Connection, (error, result)=>{
        if (error){
            reject(error)
            return;
        }
        resolve(result)
    })
})

export {Connect,Query}