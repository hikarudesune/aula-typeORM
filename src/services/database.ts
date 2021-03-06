import { Empresa } from './../models/empresa.model';
import { createConnection } from 'typeorm'

const tabelas = [Empresa]

export const conectarBD = async () => {
    await createConnection({
        database: process.env.TYPEORM_DATABASE,
        type: 'mariadb',
        port: 3306,
        password: process.env.TYPEORM_PASSWORD,
        host: process.env.TYPEORM_HOST,
        username: process.env.TYPEORM_USERNAME,
        entities: tabelas,
        logging: false
    })
}