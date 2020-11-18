import { criarEquipe, buscarEquipes, alterarEquipe, deletarEquipe, buscarUmaEquipe } from './equipe.controller'
import express from 'express'

const equipeRouter = express.Router()

equipeRouter.get('/', buscarEquipes)
equipeRouter.get('/:id', buscarUmaEquipe)
equipeRouter.post('/', criarEquipe)
equipeRouter.patch('/:id', alterarEquipe)
equipeRouter.delete('/:id', deletarEquipe)

export default equipeRouter
