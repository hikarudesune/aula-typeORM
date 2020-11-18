import express from 'express'
import { conectarBD } from './database'
import empresaRouter from './modules/empresa/empresa.router';
import equipeRouter from './modules/equipe/equipe.router';



const app = express()

const porta = 8087

app.listen(porta, () => console.log('Ouvindo na porta '+ porta))

app.use(express.json())
app.use('/empresa', empresaRouter)
app.use('/equipe', equipeRouter)

const inicializar = async(): Promise<void> => {
    await conectarBD()
}

inicializar()

export default app