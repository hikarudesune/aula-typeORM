import { criarEmpresa, buscarEmpresas, alterarEmpresa, deletarEmpresa, buscarUmaEmpresa } from './empresa.controller'
import express from 'express'

const empresaRouter = express.Router()

empresaRouter.get('/', buscarEmpresas)
empresaRouter.get('/:id', buscarUmaEmpresa)
empresaRouter.post('/', criarEmpresa)
empresaRouter.patch('/:id', alterarEmpresa)
empresaRouter.delete('/:id', deletarEmpresa)

export default empresaRouter