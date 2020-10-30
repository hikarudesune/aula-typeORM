import { Empresa } from './../models/empresa.model';
import express from 'express'
import { getRepository } from 'typeorm'
import { conectarBD } from './database'


const app = express()

const porta = 8087

app.listen(porta, () => console.log('Ouvindo na porta '+ porta))

app.use(express.json())
app.use('/empresa', empresaRouter)

const inicializar = async(): Promise<void> => {
    await conectarBD()
}

inicializar()

export default app