import { EquipeVindaDeFora } from './equipe';
import { RequestHandler } from 'express'
import { alterarEquipeNoBD, buscarEquipeNoBD, buscarUmaEquipeNoBD, criarEquipeNoBD, deletarEquipeNoBD } from './equipe.repository';

export const criarEquipe: RequestHandler = async (req, res, next) => {
  try {
    const dadosVindoDeFora: EquipeVindaDeFora = req.body.dados

    const equipeCriada = await criarEquipeNoBD(dadosVindoDeFora)

    res.json({
      equipe: equipeCriada
    })

  } catch (error) {
    next(error)
  }
}

export const alterarEquipe: RequestHandler = async (req, res, next) => {
  try {
    const id: string | undefined = req.params.id.toString()
    const dadosVindoDeFora: EquipeVindaDeFora = req.body.dados

    if (!id) throw new Error("ID inválido")

    const equipeAlterada = await alterarEquipeNoBD(id, dadosVindoDeFora)
    res.json({
      equipe: equipeAlterada
    })
  } catch (error) {
    next(error)
  }
}

export const buscarEquipes: RequestHandler = async (req, res, next) => {
  try {
    const equipesBuscadas = await buscarEquipeNoBD()
    res.json({
      equipe: equipesBuscadas
    })
  } catch (error) {
    next(error)
  }
}

export const buscarUmaEquipe: RequestHandler = async (req, res, next) => {
  try {
    const id: string | undefined = req.params.id.toString()

    if (!id) throw new Error("ID inválido")

    const equipeBuscada = await buscarUmaEquipeNoBD(id)

    res.json({
      equipe: equipeBuscada
    })
  } catch (error) {
    next(error)
  }
}

export const deletarEquipe: RequestHandler = async (req, res, next) => {
  try {
    const id: string | undefined = req.params.id.toString()

      if (!id) throw new Error("ID inválido")

    const equipeDeletada = await deletarEquipeNoBD(id)

    res.json({
      equipe: equipeDeletada
    })

  } catch (error) {
    next(error)
  }
} 